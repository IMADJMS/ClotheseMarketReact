import React from "react";
import Navbar from "./NAVBAR/navbar";
import Home from "./Home/home";
import Shop from './Shop/shop'
import Events from './Events/events'
// import Footer from "./Footer/footer";
import { Route, Routes } from "react-router-dom";
import About from "./AboutUs/about";
import Services from "./Services/services";
import News from "./news/news";
import RegisterE from "./Events/registerE";
import SingleProduct from "./Shop/SingleProduct";
import './App.css'
import Users from "./Users";

function App() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='events' element={<Events />} />
        <Route path='servise' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
        <Route path='registerE' element={<RegisterE />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
      </Routes>
      {/* <Footer /> */}

      {/* <Users/> */}
    </>
  );
}

export default App;
