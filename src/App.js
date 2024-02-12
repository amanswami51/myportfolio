import Headers, {HeaderPhone} from "./components/Headers";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";
import Achievments from "./components/Achievments";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Headers menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toaster/>
      <Home />
      <Projects />
      <Experiance/>
      <Achievments />
      <Contacts />
      <Footer/>
    </>
  );
}

export default App;
