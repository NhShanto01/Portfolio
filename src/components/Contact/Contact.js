import { useRef, useState } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_wn25y18",
                "template_qak0npl",
                formRef.current,
                "vyCZ6aZOBXRYh9dkY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Get In Touch</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            (+880)1648959833
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            mdnurhossain940@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Prembagan,Dhakkinkhan,Ashkona,Dhaka 1230
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc fs-2">
                        <b>Your Information</b>
                    </p>
                    <form ref={formRef} className="row" onSubmit={handleSubmit}>
                        <input className="mb-3" type="text" placeholder="Name" name="user_name" />
                        <input className="mb-3" type="text" placeholder="Subject" name="user_subject" />
                        <input className="mb-3" type="text" placeholder="Email" name="user_email" />
                        <textarea className="mb-3" rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;