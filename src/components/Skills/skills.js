import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTittle">What I Do </span>
      <span className="skillDesc">
        
      I am a proficient and detail-oriented software engineer with expertise in crafting visually engaging and intuitive web applications. I possess a deep understanding of design principles and a sharp eye for detail. My skills encompass HTML, CSS, JavaScript, Reactjs, Nodejs, and solidity along with proficiency in design tools like Adobe Photoshop and Illustrator."
      </span>
      <div className="skillsBars">
        <div className="skillsBar">
          <img src={UIDesign} alt="UiDesign" className="skillsBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>This is a demo text you can write your own text here</p>
          </div>
        </div>
        <div className="skillsBar">
          <img src={WebDesign} alt="WebDesign" className="skillsBarImg" />
          <div className="skillBarText">
            <h2>Reactjs</h2>
            <p>This is a demo text while making the production ready website.</p> 
          </div>
        </div>
        <div className="skillsBar">
          <img src={AppDesign} alt="Appdesign" className="skillsBarImg" />
          <div className="skillBarText">
            <h2>Nodejs</h2>
            <p>You can write text related to mobile app developement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
