import React from 'react';
import './Intro.css'
import me from '../../img/shanto-1_-removebg-preview.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Md Nur Hossain</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front-end Developer</div>
                            <div className="i-title-item">Junior Web Developer</div>
                            <div className="i-title-item">Full-Stack Developer</div>
                            <div className="i-title-item">Learner</div>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1eODeVHDAF5YWUZ49WRqyObmngEwu0Ycu/view?usp=sharing" rel="noreferrer" target="_blank" className="btn btn-success">Download Resume</a>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;