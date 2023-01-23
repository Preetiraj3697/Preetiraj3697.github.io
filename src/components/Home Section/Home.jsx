import React from 'react'
import './home.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TbArrowBigRightLines } from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'
import Typed from "react-typed"
const Home = () => {
  return (
    <section id="home" className='home section'>
      {/* this div weill be only visible at wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/Preetiraj3697" target="_blank">
          <AiFillGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/preetiraj3697/" target="_blank">
          <AiFillLinkedin className='icon'/>
          </a>
          <a href="https://www.instagram.com/paarthavshah3697/" target="_blank">
          <AiFillInstagram className='icon'/>
          </a>
          <div className='line'></div>
        </div>
      </div>
      {/* HomeContent */}
      <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className='title'>
        𝐏𝐫𝐞𝐞𝐭𝐢 𝐑𝐚𝐣
        </h1>
        <span className='subTitle'>
        <Typed
      strings={[
            "I'm a Full Stack Developer",
            "I develope scalable web based applications and software.",
          ]}
          typeSpeed={100}
          backSpeed={200}
          loop
        />
        {/* I develope scalable web based applications and software. */}
        </span>
        <p className="homeParagraph">
        <Typed
      strings={[
            "I code within Required coding standards and styles to serve the exact need.",
          ]}
          typeSpeed={100}
          backSpeed={200}
          loop
        />
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className='scroll'>Scroll Down </h6><FiChevronsDown className="icon"/>
            </a>
          </div>

        </div>
      </div>
      </div>
      {/* right div with email address (will also be visible) at wider screen*/}
     
     <div className="rightEmail">
      <div>
        <div className="emailAddress">
          <a href='https://mailto:preetiraj122000@gmail.com' target="_blank">Preetiraj122000@gmail.com</a>
        </div>
        <div className="line"></div>
      </div>
     </div>
  </section>
  )
}

export default Home
