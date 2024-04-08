import React from "react";

const ContactUs = () => {
  return (
    <section className="p-2.5 md:p-4 pb-0 md:pb-0 w-full">
      <div
        className="flex flex-col md:flex-row gap-10 md:p-8  justify-center p-4 bg-no-repeat bg-cover bg-center rounded-t-xl bg-red-600"
        // style={{
        //   backgroundColor: "#EC1C23"
        // }}
      >
        <div className="md:w-1/2">
          <h5 className="text-3xl font-semibold mb-2 md:text-3xl lg:text-4xl text-white">
            Speak with our Experts
          </h5>
          <p className="font-medium text-white">
            Our team is here to answer your questions and guide you through the
            process of finding the perfect spare parts.
          </p>
          <h5 className="mt-7 text-sm font-light text-white">
          24/7 Customer Support

          </h5>
          <h5 className="text-lg font-medium text-white">+49 179 2772530</h5>
          <h5 className="mt-5 text-sm font-light text-white">Visit Us:</h5>
          <address className="text-white">
            Quick Parts GmbH <br /> Europaalle 33 <br /> 67657 Kaiserslautern
          </address>
        </div>
        <div className="md:w-1/2">
          <form className="p-3">
            <div>
              <input
                type="text"
                id="input-name"
                placeholder="Name"
                className="block w-full p-2 text-gray-100  sm:text-xs bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 placeholder-gray-50"
              />
            </div>
            <div>
              <input
                type="email"
                id="input-email"
                placeholder="Email"
                className="block mt-3 w-full p-2 text-gray-100  sm:text-xs bg-transparent border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 placeholder-gray-50"
              />
            </div>
            <div>
              <textarea
                name=""
                id="input-message"
                cols="5"
                rows="6"
                placeholder="Message"
                className="block mt-3 w-full p-2 text-gray-100  sm:text-xs bg-transparent border-gray-200 border-b-2  focus:outline-none focus:border-gray-400 placeholder-gray-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 text-black bg-white hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs w-full sm:w-auto px-10 py-2 text-center rounded-r-full rounded-l-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
