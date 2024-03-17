import { useState } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./components/pages/Error";
import Home  from "./components/pages/Home";
import Headphones from "./components/pages/Headphones";
import Speaker from "./components/pages/Speaker";
import Earphone from "./components/pages/Earphone";
import Checkout from "./components/pages/Checkout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path="headphone" element={<Headphones/>}/>
            <Route path="speaker" element={<Speaker/>}/>
            <Route path="earphone" element={<Earphone/>}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
