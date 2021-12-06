import React from "react";
import { TiTick } from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css';
function DrivePerformance() {
    AOS.init();
    return (
        <div className="grid grid-cols-2 challenge-markets-mobile grid-mobile" data-aos="fade-left"
        data-aos-delay="100"
        >
            <div className="dont-display pl-10">
                <img className="w-9/12 h-80 p-10 ml-20" src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
            </div>

            <div className=" w-auto challenge-mobile-padding">
            <h1 className="font-bold p-3 pb-1 text-2xl">ROI Demystified</h1>
                <h1 className="p-3 pt-1 text-2xl welcome-section2-body-mobile">
                Unlock smarter market planning, better budgeting,
                 and stronger alignment to business objectives by measuring and 
                 monitoring the true business impact of your marketing programs.
                  With Impact Navigator you can:</h1>
                
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                 <h1 className="p-3 text-2xl">Run real marketing experiments</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Accurately measure true incremental impact across all audience segments</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Design and monitor testing for any media channel, on or off Skai</h1>
                 </div>
                 
            </div>
        </div>
    )
}

export default DrivePerformance;