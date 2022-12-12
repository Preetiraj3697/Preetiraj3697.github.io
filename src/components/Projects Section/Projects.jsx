import React from 'react'
import './projects.css'
import {VscLiveShare} from 'react-icons/vsc'
import {FiGithub} from 'react-icons/fi'
import img1 from '../../Assets/30day.png'
import img2 from '../../Assets/Home.png'
import img3 from '../../Assets/Recipe.png'
import img4 from '../../Assets/Tictoetak.png'
import img5 from '../../Assets/TodoList.png'
import img6 from '../../Assets/TypingSpeed.png'
import img7 from '../../Assets/weather.png'
import img8 from '../../Assets/Foods.png'
import img9 from '../../Assets/Himalaya.png'

const data = [
  {
    id:1,
    image:img1,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:2,
    image:img2,
    demo:'https://sheela-ecommerce-website.vercel.app/',
    liveLink:'https://sheela-ecommerce-website.vercel.app/',
    github:'https://github.com/Preetiraj3697/sheela-commerce-webiste-with-reactjs',
    title:'E-commerce Website',
    desc:'This website name is my mom name. Its an eCommerce app inspired by Amazon.',
    tech1:'React',
    tech2:'Router',
    tech3:'StyledComponent',
  },
  {
    id:3,
    image:img3,
    demo:'https://transcendent-gumption-e90992.netlify.app/',
    liveLink:'https://transcendent-gumption-e90992.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript/tree/main/Recipe%20App',
    title:'Recipe App',
    desc:'Your are search any food recipe in this website or web app. Please try it and review it.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },{
    id:4,
    image:img4,
    demo:'https://preeminent-dieffenbachia-fa5d25.netlify.app/',
    liveLink:'https://preeminent-dieffenbachia-fa5d25.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript/tree/main/Tic%20tac%20toe%20game',
    title:'Tic Tac Toe',
    desc:'This game is two player game you play this game and enjoy it your friends time.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:5,
    image:img5,
    demo:'https://coruscating-kulfi-46db9b.netlify.app/',
    liveLink:'https://coruscating-kulfi-46db9b.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript/tree/main/Todo%20List',
    title:'Todo List App',
    desc:'Organize your work and life, finally. Become focused, organized, and calm with Todo list App.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:6,
    image:img6,
    demo:'https://endearing-ganache-1678fb.netlify.app/',
    liveLink:'https://endearing-ganache-1678fb.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript/tree/main/Typing%20speed%20Test',
    title:'Typing Speed App',
    desc:'This website help you for increase your typing speed and check your typing speed ability within time.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:7,
    image:img7,
    demo:'https://weatherappbypreetiraj.netlify.app/',
    liveLink:'https://weatherappbypreetiraj.netlify.app/',
    github:'https://github.com/Preetiraj3697/Weather_App-',
    title:'Weather Web App',
    desc:'This weather app is one of best free weather apps.Forecastle: Forecast now, hourly forecast and daily forecast.',
    tech1:'React',
    tech2:'Axios',
    tech3:'CSS',
  },
  {
    id:8,
    image:img8,
    demo:'https://prismatic-gumdrop-ff8cbd.netlify.app/home',
    liveLink:'https://prismatic-gumdrop-ff8cbd.netlify.app/home',
    github:'https://github.com/Preetiraj3697/Food-Develivery-Website',
    title:'Tasty Treat',
    desc:'This website inspired by Zomato, a sample website built to demonstrate the use of Modern Web development tools.',
    tech1:'React',
    tech2:'Redux',
    tech3:'Bootstrap',
  },
  {
    id:9,
    image:img9,
    demo:'https://stellar-semolina-30fced.netlify.app/',
    liveLink:'https://stellar-semolina-30fced.netlify.app/',
    github:'https://github.com/Preetiraj3697/nondescript-alarm-2844',
    title:'Himalayas Website Clone',
    desc:'This is clone of Himalaya Website, a sample website built to demonstrate the use of Modern Web development tools.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
]
const Projects = () => {

  return (
    <section id="projects" className='projects container section'>
    <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({
            id,github,image,liveLink,desc,demo,title,tech1,tech2,tech3
          })=>{
            return(
              <div key={id} className="singleProject">
               <div className="imgDiv">
                <a href={liveLink} target='_blank'>
                  <img src={image} alt="title" />
                </a>
               </div>
               <div className="projectTitle">
                <h3>{title}</h3>
               </div>
               <div className="desc">
                {desc}
               </div>
               <div className="technologies flex">
                <div>{tech1}</div>
                <div>{tech2}</div>
                <div>{tech3}</div>
               </div>
               <div className="externalLinks flex" style={{display:'flex',gap:"20px",marginTop:'10px',marginBottom:'10px'}}>
                <div><a href={liveLink} target='_blank'><button className="btn externalLinks flex" style={{gap:"8px"}}><VscLiveShare className='icon'/>Live</button></a></div>
               <div><a href={github} target='_blank'><button className="btn externalLinks flex" style={{gap:"8px"}}><FiGithub className='icon'/>GitHub</button></a></div>
               </div>
              </div>
            )
          })
        }
      </div>
  </section>
  )
}


export default Projects
