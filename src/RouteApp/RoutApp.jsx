import React from 'react';
import {  Routes, Route, HashRouter  } from "react-router-dom";
import App from '../App/App';
import AboutP from '../components/AboutPage/AboutP';
import GalleryPage from '../components/GalleryPage/GalleryPage';
import ScheduleP from '../components/SchedulePage/ScheduleP';
import BlogP from '../components/BlogPage/BlogP';
import PricingP from '../components/PricingP/PricingP';
import ClassesP from '../components/ClassesP/ClassesP';
import ContactP from '../components/ContactP/ContactP';
import ScrollToTop from '../components/Scroling/Scroling';
import LoginP from '../components/LoginP/LoginP';

export default function RoutApp  (){
  return (
    <div>
      <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<App/>} ></Route>
          <Route path="/about" element={<AboutP/>}></Route>  
          <Route path="/GalleryP" element={<GalleryPage/>}></Route>
          <Route path="/ScheduleP" element={<ScheduleP/>}></Route>  
          <Route path="/BlogP" element={<BlogP/>}></Route> 
          <Route path="/PricingP" element={<PricingP/>}></Route>  
          <Route path="/ClassesP" element={<ClassesP/>}></Route>  
          <Route path="/ContactP" element={<ContactP/>}></Route>  
          <Route path="/LoginP" element={<LoginP/>}></Route>  
          <Route path="/callUs" element={<ContactP/>}></Route>  
        
        </Routes>
      </HashRouter>
      
    </div>
  );
}


