import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <>
      <NavBar />
      <main className="mt-8 mb-32 container">
        <header className="font-heading text-center mb-16">
          <h1 className="text-5xl font-bold">About</h1>
        </header>
        <section className="row items-center justify-around">
          <article className="md:col-8 space-y-4 text-xl leading-relaxed">
            <p>
              My name is Nikolay Rademacher and I'm the owner of Rademacher
              Solutions.
            </p>
            <p>
              I created Rademacher Solutions to combine two passions of mine:
              Building express, unique, and high-quality web-based experiences
              and making them available to as many people as possible.
            </p>
            <p>
              That is why I made it my mission to offer exclusive web products
              at inclusive prices.
            </p>
          </article>
          <img
            className="hidden md:block md:col-4 mask mask-star-2 rotate-6"
            src="https://avatars.githubusercontent.com/u/47133234?v=4"
            alt="Nikolay Rademacher"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
