import React from "react";

export default function About() {



    return (
        <div className="container">
            <div>
                <img src="./img/portfolioCover.jpg" type="image" className="img-fluid round mx-auto d-block" alt="portrait"/>
                <h1 className=" text-center fs-1 fw-bold">
                    Hi, I'm Amberlie
                    <br /> <h2>I am an aspiring coder/computer programmer!</h2>
                </h1>

                <p className="text fw-light"> After years of retail work and being unable to utilize my degree in English language, I made the choice to
                    pick up computer sciences, specifically coding. I joined UC Berkley's Coding Bootcamp in June 2022, and have
                    high hopes of being able to combine my tallent for language, writing, and reading, with my newfound coding
                    skills.</p>
                <p className="text fw-light"> Professionally, I have over 20 years of retail experience, several in a management postition. Among the
                    positions held, I gained experience in medical, insurance/finance, food industry, and sales.</p>

                <br />

                <p className="text fw-light">Outside of work, I am a mother, active gamer, hobby chef, and a bit of a crafty artist.</p>
                <br />
                <h2 className="divider-title text-center">My Work</h2>
                <div className="footer" />
            </div>
        </div>
    );
};