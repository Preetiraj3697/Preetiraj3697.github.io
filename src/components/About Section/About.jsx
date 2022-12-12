import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import img from '../../Assets/Image2.png'
import "./about.css";
const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a success-driven, determined web developer. I have exprience
            using HTML5 CSS3 Javascript and React to build accessible
            component-based web pages and systems. <br />
            Ability to deliver quality results while collaborating in rapidly
            changing work environments and team compositions.
            <br />A passionate person willing to learn more technologies to
            become a better developer than I was yesterday. So determined and
            result orietend.
          </h4>
          <div className="aboutBtn">
            <a href="Preeti-Raj-Resume.pdf" download="Preeti-Raj-Resume.pdf" className="flex">
              Download CV <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src={img} alt="Preeti Raj" className="aboutImg"/>
        </div>
      </div>
    </section>
  );
};

export default About;
