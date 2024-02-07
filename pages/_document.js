import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="p-0 m-0 overflow-hidden dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
