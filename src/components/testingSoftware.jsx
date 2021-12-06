import React, { useState } from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { BsSpeedometer } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoToTop from './goToTop'
import DrivePerformance from "./SolvingChalenges/drivePerformance";
import BoostProductivity from "./SolvingChalenges/boostProductivity";
import ImproveDecisioning from "./SolvingChalenges/ImproveDecisioning";

function TestingSoftware() {
    AOS.init();
    const [button, setButton] = useState("DrivePerformance")
    const [page, setPage] = useState("DrivePerformance");

    function SelectPage(event) {
      const name = event.target.id;
      setPage(name);
      setButton(name);
    }
  

  return (
    <div className="w-full h-full">
    

     <div className=" bg-fixed h-full text-left testingSoftwaresection1 welcome-section2-mobile overflow-hidden">
         <div className="grid grid-cols-1 ">
           <div>
       <h1 className="text-4xl p-16 mt-10 pb-2 text-blue-500 font-bold"><BsSpeedometer className="heading-icon"/></h1>
       <h1 className="text-4xl p-16 pb-2 pt-8 welcome-section2-title">validate.</h1>
       <h1 className="text-6xl p-16 pt-1 pb-2 pr-72 welcome-section2-title">Continuous market intelligence. Always-on incrementality testing.</h1>
       <h3 className="text-xl pl-16 pr-72 pt-16 pb-2 welcome-section2-body-mobile">Impact Navigator measures the real-world effectiveness, or incrementality,
        of a marketing tactic in the only place that matters: the real world, with real people,
         as part of a real marketing test measuring business responses that matter like revenue impact,
          client acquisition, and brand engagement. Leave the guesses and hunches to your competition,
           and speed ahead with your own growth strategy powered by real consumer insights.</h3>
        <button className="ml-16 mt-7 p-3 mb-5 w-80 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl">Talk to an Expert</button> 
        </div>    
        </div>  
     </div>

     <div className="h-full w-screen  text-center welcome-section2-mobile overflow-hidden">
         <h1 className="text-5xl">Solving Challenges for Marketers</h1>
         <div className="grid grid-cols-2 gap-7  grid-mobile">
             <div className="flex flex-col bg-gray-100 mt-20 w-96 p-14 text-left h-72 m-auto">
                 <h1 id="DrivePerformance" onClick={SelectPage} className={button === "DrivePerformance" ? "text-2xl p-3 text-blue-500 cursor-pointer" : "text-2xl p-3 cursor-pointer"}>Drive Performance</h1>
                 <h1 id="BoostProductivity" onClick={SelectPage} className={button === "BoostProductivity" ? "text-2xl p-3 text-blue-500 cursor-pointer" : "text-2xl p-3 cursor-pointer"}>Boost Productivity</h1>
                 <h1 id="ImproveDecisioning" onClick={SelectPage} className={button === "ImproveDecisioning" ? "text-2xl p-3 text-blue-500 cursor-pointer" : "text-2xl p-3 cursor-pointer"}>Improve Decisioning</h1>
                 

             </div>

             <div className="mt-20 text-left -ml-52 challenge-markets-margin-mobile">
                 
             {page === "DrivePerformance" && <DrivePerformance />}
             {page === "BoostProductivity" && <BoostProductivity />}
             {page === "ImproveDecisioning" && <ImproveDecisioning />}

             </div>

         </div>
        
     </div>

     <div className="h-full text-center text-white p-20 consumer-meeting-img">
       <h1 className="text-5xl">Find out what Sky can do for you:</h1>
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

export default TestingSoftware;