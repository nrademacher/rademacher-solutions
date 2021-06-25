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
      <div className="subpixel-antialiased bg-white optimize-legibility text-gray-9">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default RademacherSolutions;
