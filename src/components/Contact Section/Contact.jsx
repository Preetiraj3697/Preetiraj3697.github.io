import { AiFillGithub, AiFillLinkedin, AiFillMobile, AiOutlineInstagram } from 'react-icons/ai'
import { TbArrowBigRightLines, TbArrowBigUpLines } from 'react-icons/tb'
import './contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdy8r85', 'template_7q09r67', form.current, 'xkAVIy-WKLKe8tbrG')
      e.target.reset()
  };


  return (
    <section id="contact" className='contact container section'>
     <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>
          <div className="cards grid">
            <div className="card">
              <div>
                <AiFillLinkedin className='icon'/>
              </div>
              <h4>Linkedin</h4>
              <span className="userName">
                Preetiraj3697
              </span>
              <div>
                <a href="https://www.linkedin.com/in/preetiraj3697/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillGithub className='icon'/>
              </div>
              <h4>Github</h4>
              <span className="userName">
                Preetiraj3697
              </span>
              <div>
                <a href="https://github.com/Preetiraj3697" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineInstagram className='icon'/>
              </div>
              <h4>Instagram4</h4>
              <span className="userName">
                Preetiraj3697
              </span>
              <div>
                <a href="https://www.instagram.com/paarthavshah3697/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillMobile className='icon'/>
              </div>
              <h4>Mobile Number</h4>
              <span className="userName">
                8448206862
              </span>
              <div>
                <a href="#" className='flex' target="_blank">
                  Call Me<TbArrowBigUpLines className='icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form action="https://formspree.io/f/xdojzzlj" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" autoComplete="off"  required />
            <input type="email" placeholder="Enter Email" name="email" autoComplete="off"  required/>
            <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message"></textarea>
            <button className='formBtn' type="submit" value="Send">Send Email</button>
          </form>
        </div>
      </div>
  </section>
  )
}

export default Contact
