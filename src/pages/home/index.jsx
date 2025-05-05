import React from "react";
import Header from "../../component/common/Header";
import Hero from "../../component/common/Hero";
import Vision from "../../component/common/Vision";
import Features from "../../component/common/Features";
import UseCases from "../../component/common/UseCases";
import Testimonials from "../../component/common/Testimonials";
import CallToAction from "../../component/common/CallToAction";
import Footer from "../../component/common/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Features />
        <UseCases />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
