import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [checked, setChecked] = useState('solution');
  const [solutionPick, setSolutionPick] = useState('default');

  const handleOpt = (e) => {
    setChecked(e.target.value);
  };

  const handleSolutionPick = (e) => {
    setSolutionPick(e.target.value);
  };

  return (
    <>
      <NavBar />
      <main className="container mt-8 mb-16">
        <h1 className="text-5xl font-heading font-bold text-center mb-8">
          Contact Us
        </h1>
        <form
          className="flex flex-col space-y-4 container mx-auto md:col-6"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-around">
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">
                  I'd like to book a solution
                </span>
                <div>
                  <input
                    type="radio"
                    name="opt"
                    className="radio radio-neutral"
                    value="solution"
                    checked={checked === 'solution'}
                    onChange={handleOpt}
                  />
                  <span className="radio-mark"></span>
                </div>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Something else</span>
                <div>
                  <input
                    type="radio"
                    name="opt"
                    className="radio radio-neutral"
                    value="other"
                    checked={checked === 'other'}
                    onChange={handleOpt}
                  />
                  <span className="radio-mark"></span>
                </div>
              </label>
            </div>{' '}
          </div>
          {checked === 'solution' && (
            <select
              className="select select-bordered border-blue-2 w-full max-w-xs"
              value={solutionPick}
              name="solution"
              onChange={handleSolutionPick}
            >
              <option value="default" disabled>
                Choose a solution
              </option>
              <optgroup label="For Business">
                <option value="basic">Basic</option>
                <option value="plus">Plus</option>
                <option value="premium">Premium</option>
              </optgroup>
              <optgroup label="For Individuals">
                <option value="hobbyist">Hobbyist</option>
                <option value="professional">Professional</option>
              </optgroup>
              <option value="">Wildcard</option>
            </select>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              name="message"
              className="h-24 textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            onClick={() => console.log(checked, solutionPick)}
            className="col-3 text-lg font-bold bg-gradient-to-tl hover:brightness-110 from-blue-6 via-grape-6 to-yellow-6 btn border-none"
            type="submit"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
