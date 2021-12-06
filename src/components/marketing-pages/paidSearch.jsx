import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function PaidSearch() {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
          <img className="w-9/12 h-96 p-10 m-20 mt-32 mb-2 rounded-full" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
         <h1 className="text-xl p-5 pt-2">Paid search is the most tried-and-true digital channel for capturing buyer intent. 
         As the longtime industry leader, Sky enables unparalleled intelligence, speed and scale for elevated performance to complement native publisher platforms.
          Our robust, award-winning search technology helps leading brands and agencies stay ahead of the competition and win market share on the leading search engines.</h1>
        </div>
    )
}

export default PaidSearch;