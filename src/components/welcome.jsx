import React from "react";
import {
   Link
  } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoToTop from './goToTop';

function Welcome() {
    AOS.init();
  return (
    <div className=" h-full w-screen">
  <nav className="bg-white p-2 fixed w-full welcome-mobile z-10 border-b-2">
      <ul className="flex flex-row">
       <Link to="/"><li className="title-mobile mt-3 mb-2 ml-36 font-bold text-4xl">Sky</li></Link>
        <a href="#section-1"><li className="mt-5 mb-2 ml-12 hover:text-blue-500 cursor-pointer nav-items-mobile">Data Insights</li></a>
        <a href="#section-2"><li className="mt-5 mb-2 ml-12 hover:text-blue-500 cursor-pointer nav-items-mobile">Media</li></a>
        <a href="#section-3"><li className="mt-5 mb-2 ml-12 hover:text-blue-500 cursor-pointer nav-items-mobile">Marketing</li></a>
        <a href="#section-4"><li className="mt-5 mb-2 ml-12 hover:text-blue-500 cursor-pointer nav-items-mobile">Planning</li></a>
      </ul>
     <button className="button-book mt-5 mr-36 p-2 bg-blue-500 text-white w-48 rounded-2xl hover:bg-gray-200 hover:text-black" style={{position: "absolute", top: "0", right: "0"}}>Book a meeting</button>
    </nav>

     <div className="welcome-section1 h-full text-center welcome-mobile text-white">
      <h1 className="text-8xl p-32 pb-20 welcome-section1-title">smarter, faster, go-to-market</h1>
      <h3 className="text-2xl p-10 pt-1">Commerce is evolving. 
          We’ll keep you at the forefront with marketing intelligence and 
          omnichannel activation that work together to drive powerful brand growth.</h3>
         <a href="#section-1"> <button className="mt-28 mb-20 font-bold border-2 border-white p-3 rounded-full hover:bg-white hover:text-blue-600">Explore our solutions ↓</button></a>
     </div>

     <div id="section-1" className="welcome-section2 bg-fixed h-screen text-left text-white welcome-section2-mobile  overflow-hidden">
         <div className="grid grid-cols-2 grid-mobile ">
           <div className="margin-mobile">
       <h1 className="text-4xl p-16 pb-2 text-blue-500 font-bold">1</h1>
       <hr className="w-96 ml-12 dont-display"/>
       <h1 className="text-4xl p-16 pb-2 pt-10 welcome-section2-title">The data + insights advantage</h1>
       <h1 className="text-7xl p-16 pb-2 welcome-section2-title">predict</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Make smarter, predictive decisions at every turn with all the data you need and faster time-to-insight.
            Sky’s rich data solutions provide
             AI-contextualized actionable intelligence about consumer sentiment, market trends, competition and more.</h3>
       <Link to="/ConsumerIntel"><button className="button-mobile ml-16 mt-7 p-3 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white  rounded-3xl">Market and Consumer Intelligence</button></Link> 
        </div>    
        </div>  
     </div>

     <div id="section-2" className="welcome-section3 h-screen text-left text-white welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-2 grid-mobile" data-aos="fade-up" data-aos-duration="3000">
           <div className="margin-mobile">
       <h1 className="text-4xl p-16 pb-2 text-blue-500 font-bold">2</h1>
       <hr className="w-96 ml-12 dont-display"/>
       <h1 className="text-4xl p-16 pb-2 pt-10 welcome-section2-title">All the media that matters</h1>
       <h1 className="text-7xl p-16 pb-2 welcome-section2-title">reach</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Ecommerce shopping happens everywhere.
        Grow market share and win the digital shelf by maximizing interaction at every touchpoint across all online marketplaces,
         retailers, search engines, app stores and social media.</h3>
        <Link to="/MediaSolution"><button className="button-mobile ml-16 mt-7 p-3 w-96 border-2 border-blue-500 hover:bg-blue-500 hover:text-white  rounded-3xl">Online Marketplaces and Walled Gardens</button></Link> 
        </div>    
        </div>  
     </div>

     <div id="section-3" className="welcome-section4 h-screen text-left text-white welcome-section2-mobile overflow-hidden" >
         <div className="grid grid-cols-2 grid-mobile" data-aos="fade-left"
     data-aos-delay="100">
           <div className="margin-mobile">
       <h1 className="text-4xl p-16 pb-2 text-blue-500 font-bold">3</h1>
       <hr className="w-96 ml-12 dont-display"/>
       <h1 className="text-4xl p-16 pb-2 pt-10 welcome-section2-title">Automation, optimization — and results</h1>
       <h1 className="text-7xl p-16 pb-2 welcome-section2-title">activate</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Get more return from your ad spend with flexible,
        robust and cross-channel performance media activation.
         Sky’s solutions are industry-leading, with seamless ecosystem integrations,
          for data-driven campaigns and results that exceed KPIs.</h3>
        <Link to="/ChanelMarketing"><button className="button-mobile ml-16 mt-7 p-3 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white  rounded-3xl">Marketing and Media Execution</button></Link> 
        </div>    
        </div>  
     </div>

     <div id="section-4" className="welcome-section5 h-screen text-left text-white welcome-section2-mobile overflow-hidden" >
         <div className="grid grid-cols-2 grid-mobile" data-aos="flip-down" data-aos-duration="3000">
           <div className="margin-mobile">
       <h1 className="text-4xl p-16 pb-2 text-blue-500 font-bold">4</h1>
       <hr className="w-96 ml-12 dont-display"/>
       <h1 className="text-4xl p-16 pb-2 pt-10 welcome-section2-title">Test, learn, and get smarter</h1>
       <h1 className="text-7xl p-16 pb-2 welcome-section2-title">validate</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Discover the incremental impact of any marketing effort on sales lift
        and determine your optimal mix without cookies or other privacy-regulated identifiers.
         The Sky approach is unbiased, unlimited and based on real-time experiments and modeling — minus the data science learning curve.</h3>
        <Link to="/TestingSoftware"><button className="button-mobile ml-16 mt-7 p-3 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white  rounded-3xl">Measurement and Planning</button></Link> 
        </div>    
        </div>  
     </div>

     <div className="welcome-Bottom h-full text-white">
       <div className="grid grid-cols-5 p-20 grid-mobile text-center">
           <div className="m-0 text-center">
               <h1 className="text-4xl dont-display">Sky</h1>
               <div className="flex flex-row pt-5 justify-center">
                 <h3 className="text-xl text-gray-300 ml-16 p-2 hover:text-blue-700"><FaFacebookF/></h3>
                 <h3 className="text-xl text-gray-300 p-2 hover:text-blue-400"><FaTwitter/></h3>
                 <h3 className="text-xl text-gray-300 p-2 hover:text-blue-400"><FaLinkedinIn/></h3>
                 <h3 className="text-xl text-gray-300 p-2 hover:text-white"><FaInstagram/></h3>
                 <h3 className="text-xl text-gray-300 p-2 hover:text-red-600"><FaYoutube/></h3>
               </div>
               <p className="ml-10 mt-5 text-sm">© 2021 SauceCode, Ltd. All Rights Reserved.
                 Privacy Policy. Cookie Policy. Recruitment Privacy Policy</p>
           </div>

           <div className="p-4 dont-display">
               <h1 className="p-2 text-blue-500">Market Intelligence</h1>
               <h2 className="p-2">Overview</h2>
               <h2 className="p-2">How It Works</h2>
               <h2 className="p-2">By Need</h2>
               <h2 className="p-2">By Solution</h2>
           </div>

           <div className="p-4 dont-display">
               <h1 className="p-2 text-blue-500">Strategic Planning</h1>
               <h2 className="p-2">Dynamic Marketing Mix</h2>
               <h2 className="p-2">Budget Forecasting</h2>
               <h2 className="p-2">Strategic Consulting</h2>
           </div>


           <div className="p-4 dont-display">
               <h1 className="p-2 text-blue-500">Marketing Execution</h1>
               <h2 className="p-2">Overview</h2>
               <h2 className="p-2">Retail Media</h2>
               <h2 className="p-2">Paid Search</h2>
               <h2 className="p-2">Paid Social</h2>
               <h2 className="p-2">App Marketing</h2>
               <h2 className="p-2">Auditing</h2>
               <h2 className="p-2">Expert Services</h2>
           </div>

           <div className="p-4 dont-display">
               <h1 className="p-2 text-blue-500">Measurement & Growth</h1>
               <h2 className="p-2">Incrementality</h2>
               <h2 className="p-2">Experiments</h2>
               <h2 className="p-2">Cross-Channel Attribution</h2>
           </div>


       </div>
     </div>
     <GoToTop/>
    </div>
  );
} 

export default Welcome;