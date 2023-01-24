import React, { useState } from 'react'
import './navbar.css'
import {AiFillCloseCircle, AiOutlineDownload} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNavBar = () => {
        setActive('navBar activeNavbar')
    }
    const removeNavBar = () => {
        setActive('navBar ')
    }
    const [activeHeader, setactiveHeader] = useState('header');
    const addBg = () =>{
        if(window.scrollY >=10){
            setactiveHeader('header activeHeader');
        }else{
            setactiveHeader('header');
        }
    }

    window.addEventListener('scroll',addBg)
  return (
    
       <header className={activeHeader}>
     <div className="logoDiv">
        <h1 className='logo'>
        <a href='#home'>𝐏𝐫𝐞𝐞𝐭𝐢 𝐑𝐚𝐣</a>
        </h1>
     </div>
     <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
            <li className="navItem">
                <a href="#home" className="navLink"><span className='headerNumber'></span>Home</a>
            </li>
            <li className="navItem">
                <a href="#about" className="navLink"><span className='headerNumber'></span> About</a>
            </li>
            <li className="navItem">
                <a href="#skills" className="navLink"><span className='headerNumber'></span> Skills</a>
            </li>
            <li className="navItem">
                <a href="#projects" className="navLink"><span className='headerNumber'></span> Projects</a>
            </li>
            <li className="navItem">
                <a href="#contact" className="navLink"><span className='headerNumber'></span> Contact</a>
            </li>
            <a href='https://drive.google.com/file/d/1hDfJLp-qLVxQHJFq16I3Yvr5mkE8qVaD/view?usp=share_link' target="_blank" style={{"cursor":"pointer"}}>
            <button className='btn'>
            Resume
            <a href='Preeti-Raj-Resume.pdf' download='Preeti-Raj-Resume.pdf'><AiOutlineDownload style={{"margin":"0px 3px"}}/></a>
            </button>
             </a>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
        <AiFillCloseCircle className='icon'/>
        </div>
     </div>
     <div onClick={showNavBar}className="toggleNavBar">
            <TbGridDots className='icon'/>
        </div>
    </header>
    
  )
}

export default Navbar
