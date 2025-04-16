import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { pageRoutes } from "../../routes/pageRoutes";
import HeroSection from "../../components/page's/HeroSection";
import TestimonialsList from "../../components/page's/testimonials/TestimonialsList";
const Testimonials = () => {
  return (
    <>
      <Header />
      <HeroSection
        label="Testimonials"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Testimonials",
          },
        ]}
      />

      <TestimonialsList />
      <Footer />
    </>
  );
};

export default Testimonials;
