import React from 'react';

const SportsZone = () => {
    return (
        <div>
            <div>
                <div className="card mt-5">
                    <div className='row container mx-auto mt-5'>
                        <h4 className="card-title">Sports Zone</h4>
                        <h6 className="card-title">Inventory Manager Website</h6>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/9cSKb2s/Sports-zone-0.png" className="card-img-top" alt="..." />
                        </div>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/9cSKb2s/Sports-zone-0.png" className="card-img-top" alt="..." />
                        </div>
                        <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                            <img src="https://i.ibb.co/9cSKb2s/Sports-zone-0.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="card-body">

                        <p className="card-text text-start">
                            This an Inventory Manager Website.

                            This website two site : One is the client-site and the other is the server-site for backend.

                            The home page has top nav-bar, Slider banner, there are three section , which will have web site related products,healthy short article and our most awaited supplier section and footer.

                            There is a button called Update in the Product section, which can be clicked to increase or decrease the quantity of that product and it is a private route.

                            there also private route is Manage Products ,Where all the products will beWhere all the products will be. And the user can delete any product if he wants.

                            Once the user is logged in here, two extra buttons will appear in the navbar, one of which is add item and the other is my item.

                            The work of the add item is to have a form, if you fill in the information and submit it, it will be added to All Products. My item will also be added again. Here the user can delete the product from my item if he wants.

                            There are also unprotected like : Blog ,Contact Us.

                            There is a system of login, register, where anyone can log in or register with email, password, Gmail.</p>

                        <div className='col'>
                            <a href="https://sports-zone-8991a.web.app/" className="mb-2 btn btn-success">Live Link</a> <br />
                            <a href="https://github.com/NhShanto01/Warehouse-Management-Client" className="mb-2 btn btn-success">Client Code</a> <br />
                            <a href="https://github.com/NhShanto01/Warehouse-Management-Server" className="mb-2 btn btn-success">Server Code</a> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsZone;