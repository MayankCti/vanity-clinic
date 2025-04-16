import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { pageRoutes } from "../../routes/pageRoutes";
import HeroSection from "../../components/page's/HeroSection";
import ProvidedTreatments from "../../components/page's/treatments/ProvidedTreatments";

const Treatments = () => {
  return (
    <>
      <Header />
      <HeroSection
        label="Treatments"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Treatments",
          },
        ]}
      />
      <ProvidedTreatments />
      <Footer />
    </>
  );
};

export default Treatments;
