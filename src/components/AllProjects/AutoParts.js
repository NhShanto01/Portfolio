import React from 'react';

const AutoParts = () => {
    return (
        <div>
            <div className="card mt-5">

                <div className='row container mx-auto mt-5'>
                    <h4 className="card-title">Auto Parts</h4>
                    <h6 className="card-title">Manufacturing Company Website</h6>
                    <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                        <img src="https://i.ibb.co/F0vQV1S/Auto-Parts-0.png" className="card-img-top" alt="..." />
                    </div>
                    <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                        <img src="https://i.ibb.co/F0vQV1S/Auto-Parts-0.png" className="card-img-top" alt="..." />
                    </div>
                    <div className='d-flex container g-3 col-xs-12 col-md-6 col-lg-4'>
                        <img src="https://i.ibb.co/F0vQV1S/Auto-Parts-0.png" className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text text-start">
                        This a Manufacturing Company Website and it is a Mern-Stack Website. When User login in the site they can see a home page where latest products are showing.Also there is a more products button and a products route,where user can see all products and purchase as their need.They can pay their payment with card.When an Admin login into the site they can manage all order,products.They can update and delete products. They can see which user has made their payment.When user can pay their payment,admin can deliver it.When the admin delivers the product, the user receives a message in their My Order Dashboard. Both admin and user can update their profile on my profile page.</p>

                    <div className='col'>
                        <a href="https://auto-parts01.web.app/" className="mb-2 btn btn-success">Live Link</a> <br />
                        <a href="https://github.com/NhShanto01/Manufacturer-Website-client" className="mb-2 btn btn-success">Client Code</a> <br />
                        <a href="https://github.com/NhShanto01/Manufacturer-Website-Server" className="mb-2 btn btn-success">Server Code</a> <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoParts;