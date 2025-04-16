import React from 'react'
import Header from '../../layout/Header'
import HeroSection from '../../components/page\'s/HeroSection'
import Footer from '../../layout/Footer'
import { pageRoutes } from '../../routes/pageRoutes'
import Detail from '../../components/page\'s/blogs/Detail'

const BlogDetail = () => {
  return (
    <>
       <Header />
      <HeroSection
        label="Skincare Routine Essentials"
        breadcrumbItems={[
          { name: "Home", path: `${pageRoutes?.dashboard}` },
          {
            name: "Blogs",path: `${pageRoutes?.blogs}` 
          },
          {
            name: "Skincare Routine Essentials",
          },
        ]}
      />
      <Detail />
      <Footer />
    </>
  )
}

export default BlogDetail
