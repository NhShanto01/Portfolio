import React from 'react';
import './About.css';
import about from '../../img/About.jpg'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <img
                    src={about}
                    alt=""
                    className="a-img"
                />
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                    Passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Design, Front-End and Back-End Web Development to give excellent customer service.
                    I am skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack.
                </p>
            </div>
        </div>
    );
};

export default About;