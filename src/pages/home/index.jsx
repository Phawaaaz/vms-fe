import React from "react";
import Header from "../../components/common/Header";
import Hero from "../../components/common/Hero";
import Vision from "../../components/common/Vision";
import Features from "../../components/common/Features";
import UseCases from "../../components/common/UseCases";
import Testimonials from "../../components/common/Testimonials";
import CallToAction from "../../components/common/CallToAction";
import Footer from "../../components/common/Footer";

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
