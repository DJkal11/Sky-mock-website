import React from "react";
import { TiTick } from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css';
function BoostProductivity() {
    AOS.init();
    return (
        <div className="grid grid-cols-2 challenge-markets-mobile grid-mobile" data-aos="fade-left"
        data-aos-delay="100">
            <div className="dont-display">
                <img className="w-9/12 h-80 p-10 ml-20" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
            </div>

            <div className=" w-auto challenge-mobile-padding">
            <h1 className="font-bold p-3 pb-1 text-2xl">Depth and Breadth in One Platform</h1>
                <h1 className="p-3 pt-1 text-2xl welcome-section2-body-mobile">
                Impact Navigator measures your channels’ incremental impact, its effective lift alongside all of your other marketing tactics,
                 and lets you correct and adjust the measurements from your existing MTA signals—all via a first-of-kind,
                  always-on SaaS solution. Say goodbye to rigorous, slow and expensive testing and analysis,
                  and improve workflow with a marketing experimentation culture.
                   Increase the velocity of getting from test design to directional takeaways.</h1>
                
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                 <h1 className="p-3 text-2xl">Daily readouts</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Adjust based on real data and experiments</h1>
                 </div>
                 
            </div>
        </div>
    )
}

export default BoostProductivity;