import React from 'react'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { pageRoutes } from "../../routes/pageRoutes";
import HeroSection from "../../components/page's/HeroSection";
import StaffList from '../../components/page\'s/our team/StaffList';
const OurTeams = () => {
  return (
    <>
        <Header />
      <HeroSection
        label="Our Team"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Our Team",
          },
        ]}
      />
      <StaffList />
      <Footer />
    </>
  )
}

export default OurTeams
