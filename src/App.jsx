import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import SingleDevices from "./components/SingleDevices";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Man from "./components/ManWithHeadset";
import Footer from "./components/Footer";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./components/pages/Error";
import Home  from "./components/pages/Home";
import Headphones from "./components/pages/Headphones";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="headphone" element={<Headphones/>}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <SingleDevices /> */}
      {/* <Products /> */}
      {/* <Product2 /> */}
      {/* <Product3 /> */}
      {/* <Man /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
