import "./App.css";
import Header from "./container/header/Header";
import Nav from "./component/Nav/Nav";
import Home from "./container/home/Home";
import Footer from "./container/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./container/service/Service";
import AboutUS from "./container/about/AboutUs";
import Contact from "./container/contact/Contact";
import CALL from "./container/service/callcenter/Call";
import Marketing from "./container/service/marketing/Marketing";
import IT from "./container/service/IT/IT";
import Dig from "./container/service/digitalization/Dig";
function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/about" element={<AboutUS />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/call" element={<CALL />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/it" element={<IT />}></Route>
        <Route path="/digitalization" element={<Dig />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
