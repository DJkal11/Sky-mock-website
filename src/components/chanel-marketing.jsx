import React, { useState } from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GiJetpack } from 'react-icons/gi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoToTop from './goToTop'
import RetailMedia from "./marketing-pages/retailMedia";
import PaidSearch from "./marketing-pages/paidSearch";
import PaidSocial from "./marketing-pages/paidSocial";
import AppMarketing from "./marketing-pages/appMarketing";

function ChanelMarketing() {
    AOS.init();
    const [page, setPage] = useState("RetailMedia");
    const [button, setButton] = useState("RetailMedia");

    function SelectPage(event) {
      const name = event.target.id;
      setPage(name);
      setButton(name);
    }
  



  return (
    <div className="w-full h-full">
    

     <div className=" bg-fixed h-full text-left text-black welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-2 grid-mobile">
           <div>
       <h1 className="text-4xl p-16 mt-10 pb-2 text-blue-500 font-bold"><GiJetpack className="heading-icon"/></h1>
       <h1 className="text-4xl p-16 pb-2 pt-8 welcome-section2-title">activate.</h1>
       <h1 className="text-6xl p-16 pt-1 pb-2 welcome-section2-title">Media execution</h1>
       <h3 className="text-xl pl-16 pr-40 pt-16 pb-2 welcome-section2-body-mobile">Powerful cross-channel marketing platform trusted for insights-driven performance and ROI by the world’s leading brands and agencies.</h3>
       <h3 className="text-xl pl-16 pr-40 pt-16  welcome-section2-body-mobile">Drive intelligent campaigns across today’s most engaging ad channels:</h3>
        <div className="grid grid-cols-2 p-16 pt-5">
            <a href="#section-activate"><div><button onClick={SelectPage} id="RetailMedia" className={button === "RetailMedia" ? "text-xl bg-indigo-500 text-white p-2 w-40 rounded-full" : "text-xl p-2 w-40"}>Retail Media</button></div></a>
            <a href="#section-activate"><div><button onClick={SelectPage} id="PaidSearch" className={button === "PaidSearch" ? "text-xl bg-indigo-500 text-white p-2 w-40 rounded-full" : "text-xl p-2 w-40"}>Paid Search</button></div></a>
            <a href="#section-activate"><div><button onClick={SelectPage} id="PaidSocial" className={button === "PaidSocial" ? "text-xl bg-indigo-500 text-white p-2 w-40 rounded-full" : "text-xl p-2 w-40"}>Paid Social</button></div></a>
            <a href="#section-activate"><div><button onClick={SelectPage} id="AppMarketing" className={button === "AppMarketing" ? "text-xl bg-indigo-500 text-white p-2 w-40 rounded-full" : "text-xl p-2 w-40"}>App Marketing</button></div></a> 
        </div>
        </div> 

        <div id="section-activate" className="bg-indigo-200 rounded-br-full rounded-tl-full">
        {page === "RetailMedia" && <RetailMedia />}
          {page === "PaidSearch" && <PaidSearch />}
          {page === "PaidSocial" && <PaidSocial />}
          {page === "AppMarketing" && <AppMarketing />}
        </div>

        </div>  
     </div>

     

     <div className="welcome-Bottom h-full text-white welcome-section2-mobile overflow-hidden">
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

export default ChanelMarketing;