import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Expert from "./components/Expert";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      {/* <Expert /> */}
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
