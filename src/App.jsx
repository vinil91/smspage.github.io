import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import { Routes, Route } from 'react-router-dom';
// import {Layout} from "./components/Layout/Layout";
// import {Services} from "./components/Services/Services";
// import {Blog} from "./components/Blog/Blog";
// import {Main} from "./components/Main/Main";
// import {Prices} from "./components/Prices/Prices";
// import {About} from "./components/About/About";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      // <Routes>
      //     <Route path="/" element={<Layout />}>
      //         <Route index element={<Main />} />
      //         <Route path="services" element={<Services />} />
      //         <Route path="prices" element={<Prices />} />
      //         <Route path="blog" element={<Blog />} />
      //         <Route path="about" element={<About />}/>
      //     </Route>
      // </Routes>
      <div>sdds</div>
  );
};

export default App;
