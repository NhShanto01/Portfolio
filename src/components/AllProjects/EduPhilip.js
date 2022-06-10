import React from 'react';

const EduPhilip = () => {
    return (
        <div>
            <div>
                <div className="card mt-5">
                    <div className='row container mx-auto mt-5'>
                        <h4 className="card-title">Edu-Philip</h4>
                        <h6 className="card-title">Independent Service Provider Website</h6>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/q9XS00H/Edu-Philips-0.png" className="card-img-top" alt="..." />
                        </div>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/q9XS00H/Edu-Philips-0.png" className="card-img-top" alt="..." />
                        </div>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/q9XS00H/Edu-Philips-0.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="card-body">

                        <p className="card-text text-start">


                            This an Independent Service Provider Website.

                            The home page has top nav-bar, sliding banner, there is a section called Services, which will have web site related services and footer.

                            A component called check out has been made to purchase the services, where the user can buy them with his details.

                            The checkout page has a protected route, so no strangers can go there.

                            There is a system of login, register, where anyone can log in or register with email, password, Gmail, Facebook, Github, etc.
                        </p>

                        <div className='col'>
                            <a href="https://edu-phillip.web.app/" className="mb-2 btn btn-success">Live Link</a> <br />
                            <a href="https://github.com/NhShanto01/Independent-Service-Provider" className="mb-2 btn btn-success">Client Code</a> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduPhilip;