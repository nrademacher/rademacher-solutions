import Head from 'next/head';
import {NavBar} from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rademacher Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="my-24 grid place-items-center">
        <header className="text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Next-generation web solutions
          </h1>
          <h2 className="text-3xl md:text-4xl font-heading">
            at half the price
          </h2>
          <article className="my-16 md:text-lg max-w-[80vw] mx-auto ">
            <p className="mb-2">
              Modern, affordable, and beautiful web presence solutions for your
              individual business or personal needs.{' '}
            </p>
            <p>
              Every solution comes with 30 days of full support and
              no-questions-asked money-back guarantee.
            </p>
          </article>
        </header>
      </main>
    </>
  );
}
