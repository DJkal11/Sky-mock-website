import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function PaidSocial() {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
          <img className="w-9/12 h-96 p-10 m-20 mt-32 mb-2 rounded-full" src="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
         <h1 className="text-xl p-5 pt-2">Winning on social media today requires deep consumer intelligence and innovative creative at scale.
          Sky uniquely delivers privacy-safe signal-enhanced campaign intelligence and unparalleled creative management,
           allowing you to own your customer relationships. Thousands of brands trust Sky to automate, 
           orchestrate and scale advertising across Facebook, Instagram, Pinterest, Snapchat, Messenger and WhatsApp.</h1>
        </div>
    )
}

export default PaidSocial;