import React from "react";

//a dependency from react-icons. react icons has plenty icons to choose from
//here imported two that will be on mobile when menu is clicked or not clicked
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";

// Contact image importted from the assets folder
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
            
{/* The contact image is already imported, simply just the curly braces and alias you used */}
              <img src={Contactimg} alt="/" /> 
            </div>
          </div>

          <div className="col-2">
            <div className="para">
              <p>my name is <span>Athenkosi Vinqi</span>,</p>
              <p>and I am currently watching</p>
              <p>a series called <span>Stranger Things</span></p>
            </div>

            <div className="para">
              <p>you can reach me on:</p>
              <p><span>tel:</span> <a href="tel:0733901637">073 390 1637</a></p>
              <p><span>email:</span>  <a href="mailto:athenkosivinqi25@gmail.com?subject=Aglet Frontend Developer Vacancy&body=">athenkosivinqi25@gmail.com</a></p>
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
