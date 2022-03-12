import { ProductCard } from "./components/Card/ProductCard";
import React from "react";
import About from "./templates/About/About";
import Contact from "./templates/Contact/Contact";
import { Header } from "./components/Header.js/Header";
import Skills from "./templates/Skills";
import './assets/reset.css';
import './assets/styles.css';
import Routing from './Routing';
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
    <header className="header">
      <Header/>
    </header>
    <main>
      <Routing/>
    </main>
    <Footer/>
    </>
  );
}