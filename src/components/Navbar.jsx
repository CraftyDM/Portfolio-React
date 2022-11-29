import { NavBar, NavText } from "../styles/components";
import React from "react";

export default function Navbar() {
  return (
    <NavBar className="navbar sticky-top">
      <div className="container d-flex flex-row mb-3border border-success p-2 mb-2">
        <div className="title">
          <NavText href="#About" className="about ">
            About
          </NavText>
        </div>
        <section className="navbar">
          <NavText href="#Projects" className="projects">
            My Work
          </NavText>
        </section>
        <NavText href="#Contact">Contact Me</NavText>

      </div>
    </NavBar>
  );
}