import React from "react"
import { Props } from "./App";
import Project from "../components/Project";

//Images
import qori from "../static/images/qori.jpg"
import qori_thumb from "../static/images/qori_thumb.jpg"
import Pill from "../components/Pill";

const About: React.FunctionComponent<Props> = props => {
  return (
    <div {...props}>
    <h3>About Creator</h3>
      <Project
        img={<img className={"profile"} src={qori}></img>}
        placeholder={<img height={"100%"} src={qori_thumb}></img>}
        desc={
          <p className={"about-desc"}>
            An ambitious Software Engineer who loves to solve real life problems. I am a person who always try to learn new things, 
            and I will try my best for each challenge. My skills are in Python, Python Programming Language, Java, 
            Cascading Style Sheets CSS (ES6, ES2015, ES2016), AWS, JavaScript. Also, I can work both individually and in team. 
            Always like to improve and learn new skills
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-user-circle"></i> : Fari Qodri Andana
          </Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-phone"></i> : +628119117526
          </Pill>,
          <Pill newWindow href={"https://mail.google.com/mail/?fs=1&view=cm&shva=1&to=arfixfari@gmail.com"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-envelope"></i> 1 : <span className={"link"}>fariqodri21@gmail.com</span>
          </Pill>,
          <Pill newWindow href={"https://mail.google.com/mail/?fs=1&view=cm&shva=1&to=arfixfari@gmail.com"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-envelope"></i> 2 : <span className={"link"}>fari.qodri01@ui.ac.id</span>
          </Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-map-marker-alt"></i> : East Jakarta, Greater Jakarta Area, Indonesia
          </Pill>,
          <Pill newWindow href={"https://drive.google.com/file/d/1stEbxsBj49QWIdHm4cyczrdCfBontf-N/view?usp=sharing"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <span className={"link"}>Download this resume <i className="fas fa-arrow-right"></i></span>
          </Pill>,
        ]}
      />
    </div>
  )
}

export default About