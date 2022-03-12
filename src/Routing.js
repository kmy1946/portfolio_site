import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./templates/About/About";
import { ProductCard } from "./components/Card/ProductCard";
import Contact from "./templates/Contact/Contact";
import Projects from "./templates/Projects";
import Skills from "./templates/Skills";
import Home from "./templates/Home/Home";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/about' element={<About/>} />
        {/*
        <Route>
          <Page404 />
        </Route>
        */}
        </Routes>
      </Router>
  );
}

export default Routing;