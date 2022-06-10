import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";


const Portfolio = () => {


    return (

        <div id='projects'>
            <div className='mb-10'>
                <p className='text-3xl mb-3'>Portfolio</p>
                <h3 className='text-5xl font-semibold'>My Projects:</h3>
            </div>
            <div className='row container mx-auto'>
                <div className='container g-3 col-xs-12 col-md-6 col-lg-4'>
                    <img src='https://i.ibb.co/F0vQV1S/Auto-Parts-0.png' className="img-fluid" alt="" />
                    <div className="card-body">
                        <div className='mb-5'>
                            <h2 className="card-title text-3xl mb-5">Auto Parts</h2>
                            <Link
                                to="/autoParts"><button className='btn btn-success'>View Details <FiArrowRightCircle /></button></Link>
                        </div>
                    </div>
                </div>
                <div className='container g-3 col-xs-12 col-md-6 col-lg-4'>
                    <img src='https://i.ibb.co/9cSKb2s/Sports-zone-0.png' className="img-fluid" alt="" />
                    <div className="card-body">
                        <div className='mb-5'>
                            <h2 className="card-title text-3xl mb-5">Sports Zone</h2>
                            <Link
                                to="/sportsZone"><button className='btn btn-success'>View Details <FiArrowRightCircle /></button></Link>
                        </div>
                    </div>
                </div>
                <div className='container g-3 col-xs-12 col-md-6 col-lg-4'>
                    <img src='https://i.ibb.co/q9XS00H/Edu-Philips-0.png' className="img-fluid" alt="" />
                    <div className="card-body">
                        <div className='mb-5'>
                            <h2 className="card-title text-3xl mb-5">Edu-Philip</h2>
                            <Link
                                to="/eduPhilip"><button className='btn btn-success'>View Details <FiArrowRightCircle /></button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Portfolio;