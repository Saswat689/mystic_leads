import "grapesjs/dist/css/grapes.min.css";
import "@/components/dashboard/grapejs/styles/grapes.css";
import "@/components/dashboard/grapejs/styles/editor.css";
import "@/styles/globals.css";

import axios from "axios";
import Script from "next/script";

// axios.defaults.baseURL = 'https://www.mysticleads.com';
axios.defaults.baseURL = process.env.NEXTAUTH_URL;

import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
