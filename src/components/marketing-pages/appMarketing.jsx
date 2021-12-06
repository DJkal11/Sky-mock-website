import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AppMarketing() {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
          <img className="w-9/12 h-96 p-10 m-20 mt-32 mb-2 rounded-full" src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
         <h1 className="text-xl p-5 pt-2">Driving demand for consumer mobile apps requires deep category expertise.
          Sky’s approach is uniquely cross-channel and best-in-class for maximizing the impact of critical media like Apple Search Ads,
           Google, UAC, Facebook and Snapchat. With our expert automation, reporting and optimization tools, and the help of a team of experts second-to-none,
            you’ll boost marketing ROI and lift sales with ease.</h1>
        </div>
    )
}

export default AppMarketing;