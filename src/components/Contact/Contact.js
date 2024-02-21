import React from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import Adope from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
 import FaceBookIcon from "../../assets/facebook-icon.png"
 import TwitterIcon from "../../assets/twitter.png"
 import YoutubeIcon from "../../assets/youtube.png"
 import InstagramIcon from "../../assets/instagram.png"
 


const Contact = () => {
  return (
    // client section
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          I had the opportunity to work wit a diverse group of companies. some
          of the notable companies i have worked with includes
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={Adope} alt="Adope" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="ContactDesc">Please fill out the form below to discuss any work opprtunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder="Your name" />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea className="msg" name="message" rows='5' placeholder="You Message"></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
              <img src={FaceBookIcon} alt="facebookicon" className="link" />
              <img src={TwitterIcon} alt="twittericon" className="link" />
              <img src={YoutubeIcon} alt="youtubeicon" className="link" />
              <img src={InstagramIcon} alt="intagramicon" className="link" />
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
