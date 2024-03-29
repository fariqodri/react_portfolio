import React from "react"
//Images
import fqa from "../static/images/macbookfqa.png"
import tanamin from "../static/images/macbooktanamin.png"
import lki from "../static/images/macbooklki.png"
import port from "../static/images/macbookport2.png"
import riku from "../static/images/riku.png"
import waroenk from "../static/images/waroenk.png"
import centhroid from "../static/images/centhroid.png"

//Thumbnails
import fqa_thumb from "../static/images/macbookfqa_thumb.png"
import tanamin_thumb from "../static/images/macbooktanamin_thumb.png"
import lki_thumb from "../static/images/macbooklki_thumb.png"
import port_thumb from "../static/images/macbookport2_thumb.png"
import centhroid_thumb from "../static/images/centhroid_thumb.png"

import Project from "../components/Project"
import { Props } from "./App";
import Pill from "../components/Pill"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Projects: React.FunctionComponent<Props> = props => {
  const {className, id, style} = props
  return (
    <div className={className} id={id} style={{...style}}>
      <h3>My Projects</h3>
      <Project
        id={"first"}
        title={<h4><a title={"Centhroid"} rel={"noopener noreferrer"} href={"https://centhroid.com"} target={"_blank"}>Centhroid</a></h4>}
        img={<img src={centhroid}/>}
        placeholder={<img src={centhroid_thumb} height={"100%"}></img>}
        style={{marginTop: '0'}}
        desc={
          <p className={"proj-desc"}>
            Centhroid is a simple and user-friendly website that finds the midpoint of any group of places. All you need to do is enter the addresses of your friends and yourself, and the website will show you the best spot for everyone on a map. 
            Centhroid is not only useful for social gatherings, but also for business meetings, travel planning, event organizing, and more. It can save you time, money, and hassle by finding the most fair and convenient place for everyone involved.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Tailwind CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://www.djangoproject.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Django</span></Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Google Cloud Run</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Google Maps API</Pill>,
        ]}
      />
      <Project
        title={<h4><a title={"Portfolio V1"} rel={"noopener noreferrer"} href={"http://fariqodri.herokuapp.com"} target={"_blank"}>Personal Portfolio V1</a></h4>}
        img={<img className={"mockup"} src={fqa}/>}
        placeholder={<img src={fqa_thumb} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            This is my first project and my first real attempt to get into the world of web development. Although this project is quite simple,
            it's so important because this is the first milestone of my web development journey in that following year and it's safe to say that it is
            one of many things that make me who I am now. This project was first created at March 31, 2018.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://www.djangoproject.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Django</span></Pill>,
          <Pill newWindow href={"https://jquery.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>jQuery</span></Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>SQLite</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Gitlab</span></Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Heroku</span></Pill>,
        ]}
      />
      <Project
        title={<h4><a title={"Pinhome\'s Rumah Idamanku"} rel={"noopener noreferrer"} href={"https://play.google.com/store/apps/details?id=id.pinhome.consumer.mandiri&hl=in&gl=US"} target={"_blank"}>Pinhome's Rumah Idamanku</a></h4>}
        img={<img src={riku}/>}
        placeholder={<img src={riku} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            Rumah Idamanku (RIKU) is a product I helped to create during my time in Pinhome. RIKU is basically a property marketplace with
            several mortgage features. RIKU is a product of partnership with Bank Mandiri, one of the biggest state-owned banks in Indonesia, as the 
            mortgage creditor. I was involved in the RIKU project in February 2021 to November 2021. My role in the project was to create reliable APIs with Golang.
            As Pinhome was heading toward microservices architecture, I was tasked to split the mortgage related logic to a new backend service with 
            better architecture. I used DDD architecture in the new service.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Go</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>PostgreSQL</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>ElasticSearch</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Gitlab</Pill>,
        ]}
      />
      <Project
        title={<h4><a title={"Waroenk"} rel={"noopener noreferrer"} href={"https://github.com/fariqodri/waroenk-backend"} target={"_blank"}>Waroenk</a></h4>}
        img={<img src={waroenk}/>}
        placeholder={<img src={waroenk} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            Waroenk is a marketplace application where one of its main objectives is to nurture the development of Indonesia's MSME in the e-commerce sector. 
            As such, apart from normal marketplace features like products discovery, buying and selling, communications between sellers and buyers, Waroenk also has 
            feature where sellers can book a seat in several training events. In this project, I was involved in the development of the backend system and the deployment 
            of the system to the cloud. I learned a lot about NestJS, Kubernetes, Docker, and AWS, since those are the main stack in this project. Unfortunately, this project 
            was discontinued due to the business issues from the client.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>TypeScript</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>NestJS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Redis</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>PostgreSQL</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Kubernetes</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>AWS</Pill>,
        ]}
      />
      <Project
        title={<h4><a title={"tanamin"} rel={"noopener noreferrer"} href={"http://tanamin.herokuapp.com/"} target={"_blank"}>tanamin</a></h4>}
        img={<img className={"mockup"} src={tanamin}/>}
        placeholder={<img src={tanamin_thumb} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            Tanamin was created as final project for Intelligent System subject. The goal of tanamin is to equally plant crops across Indonesia
            without having the same crops adjacent to each other. Tanamin was a constraint satisfaction problem that was solved by local search algorithm.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://www.djangoproject.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Django</span></Pill>,
          <Pill newWindow href={"https://jquery.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>jQuery</span></Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>SQLite</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://en.wikipedia.org/wiki/Constraint_satisfaction_problem"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Artificial Intelligence</span></Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Gitlab</span></Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Heroku</span></Pill>,
        ]}
      />
      <Project
        title={<h4><a title={"Lantai Kayu Indonesia"} rel={"noopener noreferrer"} href={"http://lantaikayuindonesia.herokuapp.com/"} target={"_blank"}>Lantai Kayu Indonesia</a></h4>}
        img={<img className={"mockup"} src={lki}/>}
        placeholder={<img src={lki_thumb} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            This website is a mockup design and a presentation material for a client. This website is basically a company profile website
            having the company profile itself, and the products and services it provides.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>jQuery</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Gitlab</span></Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Heroku</span></Pill>,
        ]}
      />
      <Project
        title={<h4>Personal Portfolio V2</h4>}
        img={<img className={"mockup"} src={port}/>}
        placeholder={<img src={port_thumb} height={"100%"}></img>}
        desc={
          <p className={"proj-desc"}>
            This website is the upgrade of <AnchorLink href={"#first"}>my first portfolio</AnchorLink>. You can judge my web development
            skill progress throughout 2018 by seeing the difference between this portfolio and the first one since they were made 
            with a gap of almost one year. Portfolio V2 was also created in order to hone my ReactJS and Redux skill.
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>ReactJS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Redux</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Gitlab</span></Pill>,
          <Pill newWindow href={"https://cloud.google.com/compute/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Google Cloud Platform</span></Pill>,
          <Pill newWindow href={"https://www.typescriptlang.org/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}><span className={"link"}>Typescript</span></Pill>,
        ]}
      />
    </div>
  )
}

export default Projects