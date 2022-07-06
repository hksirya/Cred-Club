import React from 'react';
import HeroSection from '../components/HeroSection'
import Header from '../components/common/Header';
import ProductShowCase from '../components/ProductShowCase';
import FeelSpecial from '../components/feelSpecial';
import CredExperience from '../components/credExperience';
import CredSecurity from '../components/credSecurity';
import BrandsLove from '../components/BrandsLove';
import WindowPeak from '../components/windowPeak';
import CredStory from '../components/credStory';
import AppRating from '../components/AppRating';
import Footer from '../components/Footer';
import MobileScroll from '../components/mobileScroll';
const Home = () => {
  return (
    <div>
    <Header />
    <HeroSection />
    <ProductShowCase/>
    <FeelSpecial/>
    <BrandsLove/>
    <CredExperience/>
    <MobileScroll/>
    <div className='non-mobile'> <WindowPeak/> </div>
    <CredSecurity/>
    <CredStory/>
    <AppRating/>
    <Footer/>
    </div>
  );
}

export default Home