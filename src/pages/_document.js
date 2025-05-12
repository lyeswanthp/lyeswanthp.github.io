import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000008" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="AI Engineer, Machine Learning, Data Science, Deep Learning, AI Research" />
        <meta property="og:title" content="Lovely Yeswanth Panchumarthi - AI Engineer & ML Researcher" />
        <meta property="og:description" content="Portfolio of Lovely Yeswanth Panchumarthi, showcasing expertise in AI Engineering and Machine Learning Research" />
        {/* Add this script for GitHub Pages path handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var pathSegmentsToKeep = 1; // Keeps /repo-name
                var location = window.location;
                var l = location.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/');
                if (l.length === 0) { l = '/'; }
                window.__NEXT_DATA__.assetPrefix = l;
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}