import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import Link from 'next/link';

export default function FAQ() {
  return (
    <>
      <NavBar />
      <main className="container mt-8 mb-24 md:text-lg">
        <header className="font-heading text-center mb-16">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        </header>
        <section className="space-y-4 md:space-y-8 leading-relaxed">
          <article>
            <h2 className="font-heading text-4xl mb-4 md:mb-8">
              <span className="font-bold">Q:</span> If I want to purchase a
              solution, what is the exact process?
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-bold">A:</span> First, you reach out to
                out us via our{' '}
                <Link href="/contact">
                  <span className="link">contact form</span>
                </Link>
                , specifying the solution you require.
              </p>{' '}
              <p>
                Then, usually within one business day, we will get in touch you
                with via the provided email address. We will ask you to confirm
                that you wish to purchase the solution and ask you to describe
                your desired final product as precisely as possible. If the
                described features and scope match up with the chosen solution,
                we will send you an invoice. If it does not, we will offer you
                an available alternate solution. In case of the Wildcard
                solution, we will make you a pricing offer based on your
                specifications.
              </p>
              <p>
                Upon payment, you will be officially our client and we will
                begin building your solution. As part of that process, we will
                ask you to provide any assets you wish to have on your site. We
                will then notify you once your solution is complete, so that we
                can begin the process of the hand-off of the final product.
              </p>
            </div>
          </article>
          <article>
            <h2 className="font-heading text-4xl mb-4 md:mb-8">
              <span className="font-bold">Q:</span> What is your refund policy?
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-bold">A:</span> While you are our client,
                there are two phases during which you can request a full refund
                from us.
              </p>{' '}
              <p>
                The first phase is between receipt of full payment for and
                complete delivery of the product. This will be regarded as
                cancellation.
              </p>
              <p>
                The second phase begins once the finished product has been
                handed over to you and lasts for 30 days thereafter. During
                those 30 days you may request and will receive a refund, should
                you be unsatisfied with the product for any reason. You are not
                required to share those reasons with us in order to receive a
                refund.
              </p>
            </div>
          </article>
          <article>
            <h2 className="font-heading text-4xl mb-4 md:mb-8">
              <span className="font-bold">Q:</span> What do Rademacher Solutions
              mean by full support?
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-bold">A:</span> Rademacher Solutions offer
                30 days of full technical support for every product we deliver,
                free of charge.
              </p>{' '}
              <p>
                By full support we mean that during that period we will, during
                regular business hours, fully attend to answering any technical
                questions you may have or fixing any technical issue you may
                experience regarding the product you purchased, and do so in a
                timely manner (usually within one business day).
              </p>
              <p>
                During the 30 days of full support, your optimal satisfication
                with the product will be our prime concern. This does not mean
                that we will drop support once the period has passed. It does
                mean, however, that we will be prioritizing customers still
                within their 30-day period.
              </p>
            </div>
          </article>
          <article>
            <h2 className="font-heading text-4xl mb-4 md:mb-8">
              <span className="font-bold">Q:</span> Are there payment options
              available other than PayPal invoice?
            </h2>
            <div className="space-y-2">
              <p>
                Because we consider PayPal invoice a tried and secure payment
                solution and the nature of our particular business, we do not
                offer other payment options at this time.
              </p>{' '}
              <p>
                However, we actively consider customer feedback and may offer
                other types of payment in the future.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
