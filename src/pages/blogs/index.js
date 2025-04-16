import React from 'react'
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { pageRoutes } from "../../routes/pageRoutes";
import HeroSection from "../../components/page's/HeroSection";
import BlogList from '../../components/page\'s/blogs/BlogList';
const Blogs = () => {
  return (
    <>
        <Header />
      <HeroSection
        label="Blogs"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Blogs",
          },
        ]}
      />

      <BlogList />
      <Footer />
    </>
  )
}

export default Blogs
