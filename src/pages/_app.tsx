import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TJVKC2R');` }}></script>
        {/* End Google Tag Manager */}
      </Head>
      {/* Google Tag Manager */}
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TJVKC2R"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
      {/* End Google Tag Manager */}
      <Component {...pageProps} />
    </>
  );
}
