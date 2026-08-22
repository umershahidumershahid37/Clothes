import React from 'react'
import Navbar from '../Component/Navbar'
import HeroSection from '../Component/HeroSection'
import Features from '../Component/Features'
import Bestseller from '../Component/Bestseller'
import PromoBanner from '../Component/PromoBanner'
import PromoBanners from '../Component/PromoBannars'
import Map from '../Component/Map'

import Footer from '../Component/Footer'
import Clients from '../Component/Clients'
import ValueProps from '../Component/ValueProps'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Bestseller/>
      <PromoBanner/>
      <PromoBanners/>
      <Clients/>
      <Map/>
      <ValueProps/>
      <Footer/>
    </div>
  )
}

export default Home
