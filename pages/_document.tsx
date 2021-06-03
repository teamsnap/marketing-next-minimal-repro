import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://www.gstatic.com" />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.googleadservices.com" />
          <link rel="preconnect" href="https://www.youtube.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />
          <link rel="preconnect" href="https://consent.cookiebot.com" />
          <link rel="preconnect" href="https://facebook.com" />
          <link rel="preconnect" href="https://go.pardot.com" />
          <link rel="preconnect" href="https://beacon-v2.helpscout.net" />
          <link rel="preconnect" href="https://beaconapi.helpscout.net" />
          <link rel="preconnect" href="https://q.quora.com" />
          <link rel="preconnect" href="https://js.driftt.com" />
          <link rel="preconnect" href="https://event.api.drift.com" />
          <link rel="preconnect" href="https://metrics.api.drift.com" />
          <link rel="preconnect" href="https://targeting.api.drift.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://use.typekit.net"
            crossOrigin="anonymous"
          />
          {/* Optimize GA */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-5604190-2', 'auto');  // Update tracker settings
                        ga('require', 'GTM-KRKVQN');           // Add this line (this is the Optimize container id)
                        // Removed pageview call (this is handled in GTM GA Snippet);`,
            }}
          />
          {/* End Optimize GA */}
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WJ3N');`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJ3N" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          {/* DataLayer */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.datalayer || [];`,
            }}
          />
          {/* End DataLayer */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/bootstrap.native@2.0.27/dist/bootstrap-native.min.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
