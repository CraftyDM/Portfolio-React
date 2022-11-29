import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";




export default function App() {
  return (
   <div className="">
    <main>
      <Navbar />
      <br />
      <br />
      <About />
      <Projects />
      <br />
      <br />
      <Contact /> 
    </main>
   </div>
);
};



