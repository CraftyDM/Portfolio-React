import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Header";


export default function App() {
  const [page, setPage] = useState(0);

  const update = section => {
    setPage(section)
  }
  return (
    <div className="">
      <main>
        <Navbar send={update} />
        {
          page === 0 && <About />
        }
        {
          page === 1 && <Projects />
        }
        {
          page === 2 && <Contact />
        }

      </main>
    </div>
  );
};



