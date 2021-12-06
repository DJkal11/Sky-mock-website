import React from "react";
import { TiTick } from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ImproveDecisioning() {
    AOS.init();
    return (
        <div className="grid grid-cols-2 challenge-markets-mobile grid-mobile" data-aos="fade-left"
        data-aos-delay="100">
            <div className="dont-display">
                <img className="w-9/12 h-80 p-10 ml-20" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
            </div>

            <div className=" w-auto challenge-mobile-padding">
            <h1 className="font-bold p-3 pb-1 text-2xl">Make Data Work for You</h1>
                <h1 className="p-3 pt-1 text-2xl welcome-section2-body-mobile">
                Impact Navigator can keep your media marketing mix planning accurate
                and revelant by providing a readout on your current consumer response to different
                marketing tactics.</h1>
                
                <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                 <h1 className="p-3 text-2xl">Drive with forward-looking insights</h1>
                 </div>
                 <div className="flex flex-row">
                 <span className="text-blue-500 mt-1 text-5xl w-10"><TiTick/></span>
                <h1 className="p-3 text-2xl">Drive accuracy and success</h1>
                 </div>
                 
                 
            </div>
        </div>
    )
}

export default ImproveDecisioning;