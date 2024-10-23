import React, { useState } from "react";
import facebook from "./assets/images/facebook.jpg";
import ig from "./assets/images/ig.jpg";
import x from "./assets/images/x.png";
import linkedin from "./assets/images/linkedin.jpg";
import yt from "./assets/images/yt.png";

const Footer = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this example, let's just log the form data

    // Clear the form fields
    setFName("");
    setLName("");
    setEmail("");
    setMessage("");
    // Set submitted to true to show a confirmation message
    setSubmitted(true);
  };

  return (
    <footer className="bg-footer-color text-black p-8 grid md:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:py-10  lg:px-[500px]">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
        >
          <div className="grid grid-cols-1">
            <div>
              <label htmlFor="fname" className="block mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required
                className="bg-white text-blue-900 border rounded-lg text-center p-2"
              />
            </div>
            <div>
              <label htmlFor="lname" className="block mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                required
                className="bg-white text-blue-900 border rounded-lg text-center p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-blue-900 border rounded-lg text-center p-2"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="message" className="block mb-1">
              Feedback:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="bg-white text-blue-900 border rounded-lg text-center p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="font-display bg-footer-color text-black rounded-md p-2 border-2 border-black font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="social-section flex justify-center mb-6 py-3">
        <ul className="flex space-x-4 py-3">
          <li>
            <img src={facebook} alt="Facebook" className="w-5 h-5" />
          </li>
          <li>
            <img src={ig} alt="Instagram" className="w-5 h-5" />
          </li>
          <li>
            <img src={x} alt="Twitter" className="w-5 h-5" />
          </li>
          <li>
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
          </li>
          <li>
            <img src={yt} alt="YouTube" className="w-5 h-5" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
