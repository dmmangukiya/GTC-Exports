import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Cart from "./Pages/cart/Cart";

function App() {
  return <div className="App">
    {/* <MainPage/> */}
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </div>;
}

export default App;
