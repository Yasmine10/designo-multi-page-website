import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Locations from "./views/Locations.jsx";
import Contact from "./views/Contact.jsx";
import NotFound from "./views/NotFound.jsx";

import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import CallToAction from "./components/CallToAction.jsx";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />;

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {location.pathname != '/contact' ? <CallToAction /> : false}

      <Footer />
    </div>
  );
}

export default App;
