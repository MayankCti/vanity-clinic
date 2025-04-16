import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { pageRoutes } from "../../routes/pageRoutes";
import HeroSection from "../../components/page's/HeroSection";
import Detaile from "../../components/page's/treatementDetail/Detaile";
import FaqNdKeyBanefits from "../../components/page's/treatementDetail/FaqNdKeyBanefits";
import RecomendedTreatments from "../../components/page's/treatementDetail/RecomendedTreatments";
import CustomersReviewNdResults from "../../components/page's/treatementDetail/CustomersReviewNdResults";

const TreatmentDetail = () => {
  return (
    <>
      <Header />
      <HeroSection
        label="Fat Burner"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Treatments",
            path: `${pageRoutes?.treatments}`,
          },
          {
            name: "Fat Burner",
          },
        ]}
      />
      <Detaile />
      <FaqNdKeyBanefits />
      <CustomersReviewNdResults />
      <RecomendedTreatments />
      <Footer />
    </>
  );
};

export default TreatmentDetail;
