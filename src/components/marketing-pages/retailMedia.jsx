import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function RetailMedia() {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
         <img className="w-9/12 h-96 p-10 m-20 mt-32 mb-2 rounded-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt=""/>
         <h1 className="text-xl p-5 pt-2">Retail media is your opportunity to capture and convert buyer intent in the moment of truth.
          Sky brings deep performance advertising prowess to the channel so vendors,
           sellers and brands have everything they need to drive efficiency,
            engagement and sales on thousands of retailers worldwide, including Amazon, Walmart, Target, and Instacart.</h1>
        </div>
    )
}

export default RetailMedia;