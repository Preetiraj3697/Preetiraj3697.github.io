import React from 'react'
import { TbBrandReactNative } from 'react-icons/tb'
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoSass, IoLogoWordpress } from 'react-icons/io'
import './skills.css'
import { AiFillGithub, AiFillGitlab, AiFillHtml5 } from 'react-icons/ai'
import {SiBootstrap, SiChakraui, SiExpress, SiFigma, SiMongodb, SiRedux, SiStyledcomponents, SiTailwindcss} from 'react-icons/si'
const Skills = () => {
  return (
    <section id="skills" className='skills container section'>
       <div className="sectionTitle">
        <span className="titleNumber">02</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
    {/* skills container */}
    <div className="skillsContainer grid">
      <div className="skillGroup">
        <div className="groupTitle">
          <h2 className="title">FrontEnd</h2>
        </div>
        <div className="generalSkills">
        <div className="singleSkills">
          <div className="iconBox flex">
            <AiFillHtml5 className='icon' />
          </div>
          <span className="skillName">HTML5</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <IoLogoCss3 className='icon' />
          </div>
          <span className="skillName">Css3</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiTailwindcss className='icon' />
          </div>
          <span className="skillName">Tailwind</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiStyledcomponents className='icon' />
          </div>
          <span className="skillName">StyledC.</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiChakraui className='icon' />
          </div>
          <span className="skillName">ChakraUI</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiBootstrap className='icon' />
          </div>
          <span className="skillName">Bootstrap</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <IoLogoSass className='icon' />
          </div>
          <span className="skillName">Sass</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <IoLogoJavascript className='icon' />
          </div>
          <span className="skillName">JavaScript</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <TbBrandReactNative className='icon' />
          </div>
          <span className="skillName">React</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiRedux className='icon' />
          </div>
          <span className="skillName">Redux</span>
        </div>
      </div>
      </div>
      <div className="skillGroup">
        <div className="groupTitle">
          <h2 className="title">BackEnd</h2>
        </div>
        <div className="generalSkills">
        <div className="singleSkills">
          <div className="iconBox flex">
            <IoLogoNodejs className='icon' />
          </div>
          <span className="skillName">NodeJs</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiExpress className='icon' />
          </div>
          <span className="skillName">ExpressJs</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiMongodb className='icon' />
          </div>
          <span className="skillName">MongoDB</span>
        </div>
      </div>
      </div>
        <div className="skillGroup">
        <div className="groupTitle">
          <h2 className="title">Other</h2>
        </div>
        <div className="generalSkills">
        <div className="singleSkills">
          <div className="iconBox flex">
            <AiFillGithub className='icon' />
          </div>
          <span className="skillName">GitHub</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <AiFillGitlab className='icon' />
          </div>
          <span className="skillName">Git</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <SiFigma className='icon' />
          </div>
          <span className="skillName">Figma</span>
        </div>
        <div className="singleSkills">
          <div className="iconBox flex">
            <IoLogoWordpress className='icon' />
          </div>
          <span className="skillName">Wordpress</span>
        </div>
      </div>
      </div>
      </div>
      
  </section>
  )
}

export default Skills
