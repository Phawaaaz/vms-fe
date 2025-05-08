import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Managing Visitors Smarter
              </h2>
              <p className="text-white text-lg opacity-90 mb-8 max-w-lg">
                Create a free account and experience seamless guest access
                today. No credit card required for your 14-day trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#signup"
                  className="bg-white text-primary-600 font-medium px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-standard inline-block text-center"
                >
                  Sign Up Free
                </a>
                <a
                  href="#contact-sales"
                  className="bg-transparent text-white border border-white font-medium px-8 py-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition-standard inline-block text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="md:w-2/5 p-10 bg-blue-600 bg-opacity-30 flex items-center justify-center">
              <div className="text-white">
                <div className="flex items-center mb-6">
                  <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Free 14-day trial</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
