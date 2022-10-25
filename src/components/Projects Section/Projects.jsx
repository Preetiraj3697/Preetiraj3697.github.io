import React from 'react'
import './projects.css'
import {VscLiveShare} from 'react-icons/vsc'
import {FiGithub} from 'react-icons/fi'
import img1 from '../../Assets/Image.png'
import img2 from '../../Assets/Image2.png'
import img3 from '../../Assets/Image.png'
const data = [
  {
    id:1,
    image:img1,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:2,
    image:img2,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:3,
    image:img3,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },{
    id:4,
    image:img1,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:5,
    image:img2,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:6,
    image:img3,
    demo:'https://30dayofjavascript.netlify.app/',
    liveLink:'https://30dayofjavascript.netlify.app/',
    github:'https://github.com/Preetiraj3697/30dayofJavascript',
    title:'30DayofJavaScript',
    desc:'About 30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
]
const Projects = () => {

  return (
    <section id="projects" className='projects container section'>
    <div className="sectionTitle">
        <span className="titleNumber">03</span>
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
               <div className="externalLinks flex">
                <div className="youtubeIcon">
                  <a href={demo} target='_blank'><VscLiveShare className='icon'/></a>
                </div>
                <div className="githubIcon">
                <a href={github} target='_blank'><FiGithub className='icon'/></a>
                </div>
               </div>
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
                <small>{tech1}</small>
                <small>{tech2}</small>
                <small>{tech3}</small>
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
