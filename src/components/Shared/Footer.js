// import React from 'react';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();
//     return (
//         <div>

//             <footer>
//                 <div className="bg-success h-100 text-light">
//                     <p>Copyright © {currentYear} - All right reserved by Md Nur Hossain</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;



import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='footer'>
            <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100010318328703"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/md-nur-hossain-shanto-983904229/"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/_nur_hossain_00/"><FaInstagram /> </a>
                <a href="https://github.com/NhShanto01"><FaGithub /></a>
            </div>


            <p>Copyright ©  - All right reserved by Md Nur Hossain</p>
        </section>
    );
};

export default Footer;