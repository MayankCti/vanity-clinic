import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import About from '../components/page\'s/dashboard/About'
import Banner from '../components/page\'s/dashboard/Banner'
import WhyBookUs from '../components/page\'s/dashboard/WhyBookUs'
import ExpertTips from '../components/page\'s/dashboard/ExpertTips'
import CustomerReview from '../components/page\'s/dashboard/CustomerReview'
import OfferTreatments from '../components/page\'s/dashboard/OfferTreatments'
import BeforeAfterGallery from '../components/page\'s/dashboard/BeforeAfterGallery'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <WhyBookUs/>
    <OfferTreatments/>
    <BeforeAfterGallery/>
    <CustomerReview/>
    <ExpertTips/>
    <Footer/>
    </>
  )
}

export default Dashboard
