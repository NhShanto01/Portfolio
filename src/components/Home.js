import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Portfolio from './Projects/Portfolio';

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;