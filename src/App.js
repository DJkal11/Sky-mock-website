
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Welcome from './components/welcome';
import ConsumerIntel from './components/Consumer-intel';
import MediaSolution from './components/media-solutions';
import ChanelMarketing from './components/chanel-marketing';
import TestingSoftware from './components/testingSoftware';
import React from 'react';






function App() {
  
  return (
    <Router>
    <div className="App All-Pages">
    <nav className=" p-2 fixed w-full z-10 bg-white nav-mobile border-b-2">
      <ul className="flex flex-row">
       <Link to="/"><li className="mt-3 mb-2 ml-20 font-bold text-4xl title-mobile">Sky</li></Link>
       <button  className="button-book mt-3 mr-36 p-2 bg-blue-500 text-white w-48 rounded-2xl hover:bg-gray-200 hover:text-black" style={{position:"absolute",right:"0"}}>Book a meeting</button>
      </ul>
     
    </nav>
  

   
    <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/ConsumerIntel" element={<ConsumerIntel/>}/>
          <Route path="/MediaSolution" element={<MediaSolution/>}/>
          <Route path="/ChanelMarketing" element={<ChanelMarketing/>}/>
          <Route path="/TestingSoftware" element={<TestingSoftware/>}/>
        </Routes>
       

    </div>
    </Router>
  );
}

export default App;
