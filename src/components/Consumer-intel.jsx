import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { SiPepsi } from 'react-icons/si'
import { FaStaylinked } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { FaDove } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FaItunes } from 'react-icons/fa'
import { FaHotjar } from 'react-icons/fa'
import { FaGoodreads } from 'react-icons/fa'
import { FaEvernote } from 'react-icons/fa'
import { RiLightbulbLine } from 'react-icons/ri'
import { FiTrendingUp } from 'react-icons/fi'
import { IoStatsChart } from 'react-icons/io5'
import { FaChartPie } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { MdPhonelinkRing } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-elastic-carousel'
import GoToTop from './goToTop'

function ConsumerIntel() {
    AOS.init();
  return (
    <div className="w-full h-full">
    

     <div className="consumer-section1 bg-fixed h-full text-left text-white welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-2 grid-mobile">
           <div>
       <h1 className="text-4xl p-16 mt-10 pb-2 text-blue-500 font-bold"><FcIdea className="heading-icon"/></h1>
       <h1 className="text-4xl p-16 pb-2 pt-8 welcome-section2-title">predict.</h1>
       <h1 className="text-6xl p-16 pt-1 pb-2 welcome-section2-title">Fuel brand growth with AI-enabled consumer and market intelligence</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Sky uses patented NLP and advanced analytics to surface powerful trends
        and predictive insights — enabling brands to put the current and future needs of consumers at the heart of every decision they make,
         from product innovation to marketing strategy and execution.</h3>
        <button className="ml-16 mt-7 p-3 mb-5 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl">Learn how we do it</button> 
        </div>    
        </div>  
     </div>

     <div className="bg-white h-full p-20 welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-5 justify-items-center p-20 brand-icons-mobile" >
            <h1 className="text-6xl "><SiPepsi/></h1>
            <h1 className="text-6xl "><FaStaylinked/></h1>
            <h1 className="text-6xl "><FaWordpress/></h1>
            <h1 className="text-6xl "><FaDove /></h1>
            <h1 className="text-6xl "><FaUniversalAccess/></h1>
        </div>
         <div className="grid grid-cols-4 justify-items-center">
         <h1 className="text-6xl "><FaItunes /></h1>
         <h1 className="text-6xl "><FaHotjar /></h1>
         <h1 className="text-6xl "><FaGoodreads /></h1>
         <h1 className="text-6xl "><FaEvernote  /></h1>
        </div>  
     </div>

     <div className="bg-gray-50 h-full text-center text-black welcome-section2-mobile overflow-hidden">
     <h1 className="text-4xl p-16 pb-2 pt-48 ">Fulfilling all of your market intelligence needs</h1>
         <div className="grid grid-cols-6 justify-items-center pt-20 ">
         <h1 className="text-6xl market-intel-icon"><RiLightbulbLine/></h1>
         <h1 className="text-6xl market-intel-icon"><FiTrendingUp /></h1>
         <h1 className="text-6xl market-intel-icon"><IoStatsChart /></h1>
         <h1 className="text-6xl market-intel-icon"><FaChartPie /></h1>
         <h1 className="text-6xl market-intel-icon"><FaSearch /></h1>
         <h1 className="text-6xl market-intel-icon"><MdPhonelinkRing/></h1>

         <h1 className="text-2xl p-5 market-intel-text">Consumer</h1>
         <h1 className="text-2xl p-5 market-intel-text">Trend</h1>
         <h1 className="text-2xl p-5 market-intel-text">Product</h1>
         <h1 className="text-2xl p-5 market-intel-text">Competitive</h1>
         <h1 className="text-2xl p-5 market-intel-text">Brand</h1>
         <h1 className="text-2xl p-5 market-intel-text">Marketing</h1>
        </div>  
     </div>

     <div className="bg-white h-full text-center text-black welcome-section2-mobile overflow-hidden">
         <h1 className="text-4xl pt-28 p-2">The Deepest Category Expertise</h1>
         <p className="text-xl p-20 pt-10">We pride ourselves on delivering the most granular insights available on the market today—which is why we don’t do it for everyone.
              Sky provides comprehensive consumer and market intelligence into 48 categories across eight core markets.</p>
         <div className="grid grid-cols-3 justify-items-center gap-5 p-5 category-expertise-mobile">
              <div className="category-Alcohol w-full h-96 text-center ">
                 <h1 className="text-5xl pt-40 text-white">Alcohol</h1>
              </div>
              <div className="category-clothing w-full h-96 text-center text-white">
              <h1 className="text-5xl pt-40">Apparel</h1>
              </div>
              <div className="category-babyCare w-full h-96 text-center text-white">
              <h1 className="text-5xl pt-40">Baby Care</h1>
              </div>
              <div className="category-personalCare w-full h-96 text-center text-white">
              <h1 className="text-5xl pt-40">Beauty & Personal Care</h1>
              </div>
              <div className="category-beverage w-full h-96 text-center text-white">
              <h1 className="text-5xl pt-40">Beverage</h1>
              </div>
              <div className="category-Food w-full h-96 text-center">
              <h1 className="text-5xl pt-40 text-white">Food</h1>
              </div>
        </div>  
        <button className="mt-7 p-3 mb-5 w-64 border-2 border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white">Contact us</button>
        <p className="text-xl pt-7 pb-20">Don’t see your market? We are always adding new verticals so let’s have a chat!</p>
     </div>


     <div className="h-full text-center text-black welcome-section2-mobile overflow-hidden">
     <h1 className="text-4xl pt-28 pb-32">Market Intelligence Solutions</h1>
         <div className="grid grid-cols-3 pt-20  justify-items-center category-expertise-mobile">
           <div className="w-full h-full p-10 pt-0 bg-blue-300">
            <img className="w-52 h-52 rounded-full m-auto -mt-32 market-solution-image" src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1801&q=80" alt="pic" />
            <h1 className="text-2xl pt-10">Ask MI:For quick questions</h1>
            <h3 className="text-xl">Essential insights that anyone can access quickly and easily via an intuitive search bar.</h3>
           </div>

           <div className="w-full h-auto p-10 pt-0 -mt-10 bg-red-300 market-solution-div">
            <img className="w-52 h-52 rounded-full m-auto -mt-32 market-solution-image" src="https://images.unsplash.com/photo-1615494937387-40ae92370e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="pic" />
            <h1 className="text-2xl pt-10 ">Ask MI:For quick questions</h1>
            <h3 className="text-xl">Essential insights that anyone can access quickly and easily via an intuitive search bar.</h3>
           </div>

           <div className="w-full h-full p-10 pt-0 bg-green-300">
            <img className="w-52 h-52 rounded-full m-auto -mt-32 market-solution-image" src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="pic" />
            <h1 className="text-2xl pt-10">Ask MI:For quick questions</h1>
            <h3 className="text-xl">Essential insights that anyone can access quickly and easily via an intuitive search bar.</h3>
           </div>

        </div>  
     </div>

     <div className="h-full text-center text-black p-20 welcome-section2-mobile overflow-hidden">
       <h1 className="text-4xl p-1">Measurable impact for category-leading brands</h1>
       <Carousel itemsToShow={1}>
           <div className="p-10">
              <h1 className="text-9xl">3x</h1>
              <h3 className="text-2xl">increase in successful product launches</h3>
           </div>

           <div className="p-10">
           <h1 className="text-9xl">15X</h1>
              <h3 className="text-2xl">revenue growth</h3>
           </div>

          <div className="p-10">
           <h1 className="text-9xl">#1</h1>
              <h3 className="text-2xl">first-mover advantage in a $9.6bn market</h3>
           </div>
           </Carousel>
     </div>

     <div className="h-full text-center text-white p-20 consumer-meeting-img">
       <h1 className="text-5xl">Ready to start making better decisions?</h1>
       <button className="mt-7 p-3 mb-5 w-64 border-2 border-white hover:bg-white hover:text-black rounded-3xl">Book a Meeting</button>
     </div>


     <div className="welcome-Bottom h-full text-white">
       <div className="grid grid-cols-5 p-20 grid-mobile text-center">
           <div>
               <h1 className="text-4xl dont-display">Sky</h1>
               <div className="flex flex-row pt-5 justify-center">
                 <h3 className="text-xl text-gray-300 ml-20 p-2 hover:text-blue-700"><FaFacebookF/></h3>
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

export default ConsumerIntel;