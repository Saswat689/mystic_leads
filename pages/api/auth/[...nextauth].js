import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import bcrypt from "bcrypt";
import DiscordProvider from "next-auth/providers/discord";
import SpotifyProvider from "next-auth/providers/spotify";
import MongoDbAdapter from "@/lib/adapter";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  //create custom adapter as well
  adapter: MongoDbAdapter(),
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "joe@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        console.log('inside authorize',process.env.MONGODB_URI)
        try {
          // Add logic here to look up the user from the credentials supplied
          let user = await axios.post(
            `${process.env.MONGODB_URI}/findOne`,
            {
              dataSource: "cluster",
              database: "test",
              collection: "users",
              filter: {
                email: credentials.email
              },
              projection: {},
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                apiKey: process.env.DATAAPI_KEY,
              },
            }
          );

          //user not present in db but trying to signin
          if (!user.data.document) {
            return null;
          }

          console.log(user.data.document)

          //verify the password
          let verified = await bcrypt.compare(
            credentials.password,
            user.data.document.password
          );

          console.log('verified',verified)

          if (!verified) {
            return null;
          }

          return { name: user.data.document.username, email: user.data.document.email };
        } catch (e) {
          console.log(e);
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('inside signin',process.env.MONGODB_URI)
      try {
        //if provider is discord then return true
        console.log(user);
        console.log(account);

        if (account.provider == "discord" || account.provider == "spotify") {
          //create a new user if it doesn't exist
          let founduser = await axios.post(
            `${process.env.MONGODB_URI}/findOne`,
            {
              dataSource: "cluster",
              database: "test",
              collection: "users",
              filter: {
                email: user.email
              },
              projection: {},
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                apiKey: process.env.DATAAPI_KEY,
              },
            }
          );

          if (!founduser.data.document) {
            await axios.post(
              `${process.env.MONGODB_URI}/insertOne`,
              {
                dataSource: "cluster",
                database: "test",
                collection: "users",
                document: {
                  provider: account.provider,
                  username: user.name,
                  email: user.email,
                  avatar: user.image,
                  hasPaid: false,
                },
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  apiKey: process.env.DATAAPI_KEY,
                },
              }
            );
          }

          return true;
        }
        //authorise for email auth
        if (!credentials) {
          //check if it's an existing user before sending em a magic link
          let profile = await axios.post(
            `${process.env.MONGODB_URI}/findOne`,
            {
              dataSource: "cluster",
              database: "test",
              collection: "users",
              filter: {
                email: user.email
              },
              projection: {},
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                apiKey: process.env.DATAAPI_KEY,
              },
            }
          );

          if (profile.data.document) {
            //user present in db, send magic link
            return true;
          }

          //user not present in db(register em)
          return "/auth/register";
        } else {
          return true; //credentials auth already verified
        }
      } catch (e) {
        console.log(e);

        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.username;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
