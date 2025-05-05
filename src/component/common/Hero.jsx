import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden ">
      <div className="container mx-auto px-6 md:px-6 lg:px-8  md:py-42">
        <div className="flex flex-col lg:flex-row items-center align-middle">
          <div className="w-full  lg:w-1/2 mb-12 lg:mb-0 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Smart Visitor Access.
              <span className="text-blue-400 text-blue-400">
                {" "}
                Simplified.
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
              Say goodbye to paper logs. Greet your guests with a modern
              check-in system powered by QR codes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="bg-blue-400 bg-blue-400 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-xl transition-standard shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1"
              >
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 bg-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#demo"
                className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-xl border border-gray-300 transition-standard hover:-translate-y-1 flex items-center justify-center"
              >
                Watch Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
              <img
                src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg"
                alt="Person scanning QR code at a smart terminal"
                className="relative rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
