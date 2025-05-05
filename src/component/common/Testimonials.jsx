import React from "react";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform helped us reduce check-in time by 70% while enhancing our security protocols!",
    name: "Frank Micheal.",
    title: "Admin Officer",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    quote:
      "The dashboard gives us real-time insights into visitor patterns, allowing us to staff our reception appropriately.",
    name: "Misbaudeen Abdul.",
    title: "Operations Director",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    quote:
      "Parents love the contactless sign-in feature, especially during peak health concern periods.",
    name: "Oreoluwa .O.",
    title: "CFO",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [nextSlide, paused]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Testimonial */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-2xl shadow-md p-10 relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="mb-8 pt-8 text-center">
                      <svg
                        className="w-12 h-12 text-primary-300 mx-auto mb-4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                      <p className="text-lg text-gray-700 mb-4">
                        {testimonial.quote}
                      </p>
                      <div className="h-px w-16 bg-primary-300 mx-auto my-4"></div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-blue-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  activeIndex === index ? "bg-blue-400 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
