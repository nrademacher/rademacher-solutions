import Link from 'next/link';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <header className="grid place-items-center my-8 text-center container-fluid md:my-16">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl font-heading">
          Next-Generation Web Solutions
        </h1>
        <h2 className="text-3xl md:text-5xl font-heading">
          At half the price.
        </h2>
        <article className="my-8 mx-auto text-sm leading-loose md:text-base max-w-[60vw]">
          <p>
            Affordable, performant, and beautiful web presence solutions for
            businesses and individuals. Get 30 days of full support and
            money-back guarantee on every product. With Rademacher Solutions,
            you pay less and get more.{' '}
          </p>
        </article>
      </header>
      <main className="mb-16 container-fluid">
        <section className="container mb-8 md:mb-16">
          <div className="justify-between items-center row">
            <article className="lg:col-5">
              <p className="mb-2 text-base">FOR BUSINESSES</p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                Bring your business into the modern age
              </h2>
              <p>
                With a business solution by Rademacher Solutions, your website
                will look and perform better than the competition. All at a
                fraction of what they paid.
              </p>
              <div className="pt-6 text-blue-6">
                <Link href="/business">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-blue-6">
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
                <img src="/undraw_product_tour_re_8bai.svg" alt="Performant" />
              </div>
            </article>
          </div>
        </section>
        <section className="container mb-8 md:mb-16">
          <div className="flex-wrap-reverse items-center row">
            <div className="mt-8 lg:col-7 lg:pr-6 lg:mt-0">
              <div className="container aspect-w-16 aspect-h-9">
                <img src="/undraw_speed_test_wxl0.svg" alt="Responsive" />
              </div>
            </div>
            <article className="text-base lg:col-5">
              <div>
                <p className="mb-2 text-base">FOR BUSINESSES</p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                  First-class site performance
                </h2>
                <p className="mb-4">
                  Using cutting-edge technologies, websites built by us load
                  fast and stay fast—vital for retaining your visitors and
                  converting them to customers.
                </p>
                <p>
                  Get a headstart and leave your competition behind with
                  Rademacher Solutions.
                </p>
              </div>
              <div className="pt-6 text-blue-6">
                <Link href="/business">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-blue-6">
                    <span>View business solutions and pricings</span>
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
        <section className="container mb-8 md:mb-16">
          <div className="justify-between items-center row">
            <article className="lg:col-5">
              <p className="mb-2 text-base">FOR BUSINESSES</p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                Your products and services in the limelight
              </h2>
              <p className="mb-4">
                Rademacher Solutions's responsive design principles prioritize
                optimal presentation of your products or services on any device.
              </p>
              <p>
                With our deep love both for detail and a clean, modern style,
                your clients and customers will get to know them in the best
                light possible.
              </p>
              <div className="pt-6 text-blue-6">
                <Link href="/business">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-blue-6">
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
            <article className="mt-8 lg:mt-0 lg:col-7 lg:pl-6">
              <div className="container aspect-w-16 aspect-h-9">
                <img src="/undraw_smart_resize_wpn8.svg" alt="" />
              </div>
            </article>
          </div>
        </section>
        <section className="container mb-8 md:mb-16">
          <div className="flex-wrap-reverse items-center row">
            <div className="mt-8 lg:col-7 lg:pr-6 lg:mt-0">
              <div className="container aspect-w-16 aspect-h-9">
                <img
                  src="/undraw_portfolio_website_lidw.svg"
                  alt="Responsive"
                />
              </div>
            </div>
            <article className="text-base lg:col-5">
              <div>
                <p className="mb-2 text-base">FOR INDIVIDUALS</p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                  Supercharge yourself on the web
                </h2>
                <p className="mb-2">
                  Your professional achievements, creative works, or other
                  personal content deserve a professional-grade, beautifully
                  designed space on the web.
                </p>
                <p>
                  And with a personal solution by Rademacher Solutions, you get
                  just that.
                </p>
              </div>
              <div className="pt-6 text-grape-6">
                <Link href="/personal">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-grape-6">
                    <span>View personal solutions and pricing</span>
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
        <section className="container mb-8 md:mb-16">
          <div className="justify-between items-center row">
            <article className="lg:col-5">
              <p className="mb-2 text-base">FOR INDIVIDUALS</p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                Don't break the bank
              </h2>
              <p className="mb-2">
                In the current market, you usually have to choose between paying
                a high premium for a custom solution or opting for a cheap but
                uninspiring off-the-self product.
              </p>
              <p>
                Rademacher Solutions offers a third way: Get a stunning,
                hand-made web presence you will be proud to show off for as
                little as $49.
              </p>
              <div className="pt-6 text-grape-6">
                <Link href="/business">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-grape-6">
                    <span>View personal solutions and pricing</span>
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
            <article className="mt-8 lg:mt-0 lg:col-7 lg:pl-6">
              <div className="container aspect-w-16 aspect-h-9">
                <img src="/undraw_Savings_re_eq4w.svg" alt="Savings" />
              </div>
            </article>
          </div>
        </section>
        <section className="container mb-8 md:mb-16">
          <div className="flex-wrap-reverse items-center row">
            <div className="mt-8 lg:col-7 lg:pr-6 lg:mt-0">
              <div className="container aspect-w-16 aspect-h-9">
                <img
                  src="/undraw_lightbulb_moment_re_ulyo.svg"
                  alt="Wildcard"
                />
              </div>
            </div>
            <article className="text-base lg:col-5">
              <div>
                <p className="mb-2 text-base">WILDCARD</p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
                  Your ideas, realized
                </h2>
                <p className="mb-2">
                  Didn't find a solution for your individual or business needs?
                  No problem. If you can dream it, Rademacher Solutions can
                  probably build it.
                </p>
                <p>
                  Get in touch with us today to discuss your desired features
                  and find a suitable price point together.
                </p>
              </div>
              <div className="pt-6 text-yellow-6">
                <Link href="/contact">
                  <div className="flex items-center w-max text-sm border-b-2 border-white cursor-pointer md:text-base hover:border-yellow-6">
                    <span>Get in touch now</span>
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
      <Footer />
    </>
  );
}
