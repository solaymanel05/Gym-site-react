import React from 'react';
import Nav from '../components/1.Navbar/Nav';
import Hero from '../components/2.Hero/Hero';
import About from '../components/3.About/About';
import Classes from '../components/4.Classes/Classes';
import Info from '../components/5.Info/Info';
import Details from '../components/6.Details1/Details';
import Testimonials from '../components/7.Testimonials/Testimonials';
import Gallery from '../components/8.Gallery/Gallery';
import Calc from '../components/9.Calculate/Calc';
import Pricing from '../components/10.Pricing/Pricing';
import LatestBlog from '../components/11.LatestBlog/LatestBlog';
import CallUs from '../components/12.CallUs/CallUs';
import Footer from '../components/13.Footer/Footer';
import MoreDetails from '../components/MoreDetails/MoreDetails';
import { useSelector } from 'react-redux';
import { bannerSelector } from '../Selectores/Banner/BannerSelector';
import ScrollButton from '../components/ScrollBtn/scrollBtn';


export default function App (){
  const bannerSel = useSelector(bannerSelector)
  console.log("action showing",bannerSel)
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Classes/>
      <Info/>
      <Details/>
      <Testimonials/>
      <Gallery/>
      <Calc/>
      <Pricing/>
      <LatestBlog/>
      <CallUs/>
      <Footer/>
      <ScrollButton/>
    </div>
  );
}


