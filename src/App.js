import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import NoPage from "./Components/NoPage";
import Footer from "./Components/Footer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/fooddetails" element={<FoodDetails/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
