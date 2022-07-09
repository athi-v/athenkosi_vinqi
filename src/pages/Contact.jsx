import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Contactimg from "../assets/pictures/contact-image.jpg";
const Contact = () => {
  return (
    <div className="contact">
   
      <div className="container">
        <div className="content">
        <div className="ok">
      <h1>hello</h1>
    </div>
          <div className="col-1">
            <div className="image">
              <img src={Contactimg} alt="/" />
            </div>
          </div>

          <div className="col-2">
            <div className="para">
              <p>my name is Athenkosi Vinqi,</p>
              <p>and I am currently watching</p>
              <p>a series called Stranger Things</p>
            </div>

            <div className="para">
              <p>you can reach me on:</p>
              <p>tel: 073 390 1637</p>
              <p>email: athenkosivinqi25@gmail.com</p>
            </div>

            <div className="para">
              <p>
                share: <FaFacebookF className="spacing"/> <FaTwitter className="spacing"/> <FaGooglePlusG className="spacing"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
