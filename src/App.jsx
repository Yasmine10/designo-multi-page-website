import { Routes, Route } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Locations from "./views/Locations.jsx";
import Contact from "./views/Contact.jsx";

import Navigation from "./components/Navigation.jsx";

function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-company" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />;
      </Routes>
    </div>
  );
}

export default App;
