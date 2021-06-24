import {Html} from 'next/document'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function RademacherSolutions({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.svg" />
        <title>Rademacher Solutions</title>
      </Head>
      <div data-theme="light" className="container subpixel-antialiased optimize-legibility text-gray-9 text-shadow-sm bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default RademacherSolutions;
