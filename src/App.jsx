import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Helmet>
        <title>
          Aurex CPA Solutions | CPA, Tax Preparation & Accounting Services
        </title>

        <meta
          name="description"
          content="Professional CPA, bookkeeping, payroll, tax preparation and accounting services for businesses across the United States."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Aurex CPA Solutions",
            url: "https://aurexcpas.com",
            serviceType: [
              "Tax Preparation",
              "Bookkeeping",
              "Payroll Services",
              "Accounting Services",
              "Financial Advisory",
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
