import { NavBar } from '../components/NavBar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <header className="grid place-items-center my-16 text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl font-heading">
          Next-Generation Web Solutions
        </h1>
        <h2 className="text-4xl md:text-5xl font-heading">At half the price.</h2>
        <article className="my-16 mx-auto max-w-[60vw]">
    <p>
            Affordable, performant, and beautiful web presence solutions for businesses and individuals. Get 30 days of full support and money-back guarantee on every product. With Rademacher Solutions, you pay less and get more.{' '}
          </p>
        </article>
      </header>
      <main className="mb-16">
        <section className="container mb-16">
          <div className="justify-between items-center row">
            <article className="lg:col-5">
              <p className="mb-2 text-base">FOR BUSINESSES</p>
              <h2 className="mb-4 text-4xl font-bold font-heading">
                Bring your business into the modern age
              </h2>
              <p className="mb-4">
                With a business solution by Rademacher Solutions, your website
                will look and perform better than the competition. All at a
                fraction of what they paid.
              </p>
              <div className="pt-6 text-blue-6">
                <Link href="/business">
                  <div className="flex items-center w-max cursor-pointer border-b-2 border-white hover:border-blue-6">
                    <span>View business solutions and pricing</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </article>
            <article className="mt-8 lg:mt-0 lg:col-6 lg:pl-6">
              <div className="container aspect-w-16 aspect-h-9">
                <img src="/undraw_product_tour_re_8bai.svg" alt="" />
              </div>
            </article>
          </div>
        </section>
        <section className="container">
          <div className="flex-wrap-reverse items-center row">
            <div className="mt-3 lg:col-7 lg:pr-6 lg:mt-0">
              <div className="container aspect-w-16 aspect-h-9">
                <img src="/undraw_speed_test_wxl0.svg" alt="" />
              </div>
            </div>
            <article className="text-base lg:col-5">
              <div>
                <p className="mb-2 text-base">FOR BUSINESSES</p>
                <h2 className="mb-4 text-4xl font-bold font-heading">First-class site performance</h2>
                <p className="mb-4">
                  Using cutting-edge technologies, websites built by us load fast and stay fast—vital for retaining your visitors
                  and converting them to customers.
                </p>
                <p className="">
Get a headstart and leave your competition behind with Rademacher Solutions.
    </p>
              </div>
              <div className="pt-8 text-blue-6">
                <Link href="/business">
                  <div className="flex items-center w-max cursor-pointer border-b-2 border-white hover:border-blue-6">
                    <span>View business solutions and pricing</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
