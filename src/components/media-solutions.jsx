import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { SiNike } from 'react-icons/si'
import { SiAdidas } from 'react-icons/si'
import { SiAmazonaws } from 'react-icons/si'
import { SiWalmart } from 'react-icons/si'
import { SiMicrosoft } from 'react-icons/si'
import { SiApplemusic } from 'react-icons/si'
import { SiTata } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-elastic-carousel'
import GoToTop from './goToTop'

function MediaSolution() {
    AOS.init();
  return (
    <div className="w-full h-full">
    

     <div className="media-section1 bg-fixed h-full text-left text-white welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-2 grid-mobile">
           <div>
       <h1 className="text-4xl p-16 mt-10 pb-2 text-blue-500 font-bold"><FaRegPaperPlane className="heading-icon"/></h1>
       <h1 className="text-4xl p-16 pb-2 pt-8 welcome-section2-title">reach.</h1>
       <h1 className="text-6xl p-16 pt-1 pb-2 welcome-section2-title">Retail media solutions to win customers whenever, wherever they shop</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Simplify retail media with advertising on every retailer that matters, find your optimal mix and win big with full retail intelligence. All with Sky.
Leading brands & agencies rely on Skai™ for advanced optimization and cross-channel analytics to drive massive omnichannel growth.
 Unlike any other retail media platform, Sky is backed by robust, 
 world-renowned retail media engineering and experts who know exactly how to advise and lead your ecommerce evolution in the digital era.</h3>
        <button className="ml-16 mt-7 p-3 mb-5 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl">Talk to an Expert</button> 
        </div>    
        </div>  
     </div>

     <div className="bg-white h-full p-20 text-center welcome-section2-mobile overflow-hidden">
         <h1 className="text-5xl">Sky's retail media platform offers advanced capabilities:</h1>
         <div className="grid grid-cols-2 gap-0 grid-mobile">
             <div className="flex flex-col bg-gray-100 mt-20 w-96 p-14 text-left">
                 <h1 className="text-blue-400 text-2xl p-3 bg-green-100">Robust Product Capabilities</h1>
                 <h1 className="text-2xl p-3">Unprecedented Retailer Reach</h1>
                 <h1 className="text-2xl p-3">Unified Retail Intelligence</h1>
                 <h1 className="text-2xl p-3">Experts at your Service</h1>
                 <h1 className="text-2xl p-3">Cross-Media Excellence</h1>

             </div>

             <div className="mt-20 text-left -ml-52 welcome-section2-mobile overflow-hidden retail-media-mobile">
                 
                <h1 className="font-bold p-3 pb-1 text-2xl">Products built to exceed your goals</h1>
                <h1 className="p-3 pt-1 text-2xl">Automation, optimization, campaign management & reporting made easy</h1>
                
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                 <h1 className="p-3 text-2xl">Automated keyword harvesting. Rules-based and algorithmic options are available</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Dayparting for Sponsored Products, Sponsored Brands & Sponsored Display</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Budget management tools to pace budgets across Sponsored Products</h1>
                </div>
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Access to inventory, forecasting and hourly sales data</h1>
                </div>
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Paid & organic share of voice</h1>
                </div>
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">And much, much more!</h1>
                </div>

             </div>

         </div>
        
     </div>

  
     <div className="bg-gray-50 h-screen text-center text-black welcome-section2-mobile overflow-hidden dont-display">
     <h1 className="text-4xl p-16 pb-2 pt-48 ">The enterprise-grade platform to manage all your
                       retail media ad campaigns at scale</h1>

                <div className="slider mt-20 w-8/12 h-52 m-auto overflow-hidden relative">
                   <div className="slide-track flex flex-row">
                       <span className="flex">
                      <h1 className=""><SiNike className="text-9xl p-5 " /></h1>
                      <h1 className="text-3xl "><SiAdidas className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl "><SiAmazonaws className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl "><SiWalmart className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl "><SiMicrosoft className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl "><SiApplemusic className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl "><SiTata className="text-9xl p-5"/></h1>
                     
                      </span>
                     
                      <span className="flex">
                      <h1 className="text-3xl"><SiNike className="text-9xl p-5" /></h1>
                      <h1 className="text-3xl"><SiAdidas className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl"><SiAmazonaws className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl"><SiWalmart className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl"><SiMicrosoft className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl"><SiApplemusic className="text-9xl p-5"/></h1>
                      <h1 className="text-3xl"><SiTata className="text-9xl p-5"/></h1>
                      
                      </span>
                    
                   </div>

                   

                </div>
     </div>

     <div className="bg-white h-full text-center text-black welcome-section2-mobile overflow-hidden">
         <h1 className="text-4xl pt-28">Insights & Thought Leadership</h1>
        
         <div className="grid grid-cols-3 justify-items-center gap-5 p-5 mt-10">
              <div className="media-img1 w-full h-60 text-center insights-image">
                 
              </div>
              <div className="media-img2 w-full h-60 text-center text-white insights-image">
             
              </div>
              <div className="media-img3 w-full h-60 text-center text-white insights-image">
              
              </div>
              <div className="w-full h-60 text-2xl market-intel-text">
               <h1>10 Reasons to Be Excited About Sky Commerce’s Massive Expansion of Seven More Retailers</h1>
              </div>
              <div className="w-full h-60 text-2xl market-intel-text">
               <h1>The Sky 5: Five Questions on the Retail Customer Experience (CX)</h1>
              </div>
              <div className="w-full h-60 text-2xl market-intel-text">
               <h1>The Sky 5: Five Must-Knows for Instacart Advertising</h1>
              </div>
              
        </div>  
     </div>


     

     <div className="h-full text-center text-black p-12 welcome-section2-mobile overflow-hidden">
       <Carousel itemsToShow={1} className="w-full">
           <div className="p-10">
              <h1 className="text-3xl p-5 media-carousel-mobile">“Sky allowed us to leverage AI & ML to optimize our Retail Media campaigns’ bids & budgets more efficiently & effectively than ever before, increasing overall ROAS by 263%!”</h1>
              <h3 className="text-2xl font-bold">Joe Dow, Account Manager, Netcore</h3>
           </div>

           <div className="p-10">
           <h1 className="text-3xl p-5 media-carousel-mobile">“Sky brings together all of the retailers that matter most to us, in one place – helping our teams organize, analyze, and optimize how we engage shoppers across Amazon, Walmart, Target, Instacart and so many others”</h1>
              <h3 className="text-2xl font-bold">Kathy Jewels, Ecommerce Operation Analyst, Chimps</h3>
           </div>

          <div className="p-10">
           <h1 className="text-3xl p-5 media-carousel-mobile">“Thanks to Sky, our team was able to turn 15 hours of work into 15 minutes!”</h1>
              <h3 className="text-2xl font-bold">Eric Banner, Search & Ecommerce Partner, Weavemaker</h3>
           </div>
           </Carousel>
     </div>

     <div className="h-full text-center text-white p-20 consumer-meeting-img">
       <h1 className="text-5xl">Exceed your goals with Sky</h1>
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

export default MediaSolution;