import { NavBar, NavText } from "../styles/components";
import React from "react";

export default function Navbar(props) {
  const changePage = number => {
    props.send(number)
  }
  return (
    <NavBar className="navbar sticky-top">
      <div className="container d-flex flex-row mb-3border border-success p-2 mb-2">
        <div className="title">
          <NavText onClick={() => changePage(0)} className="about ">
            About
          </NavText>
        </div>
        <section className="navbar">
          <NavText onClick={() => changePage(1)} className="projects">
            My Work
          </NavText>
        </section>
        <NavText onClick={() => changePage(2)}>Contact Me</NavText>

      </div>
    </NavBar>
  );
}