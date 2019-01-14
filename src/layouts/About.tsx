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
            Hi, my name is Fari Qodri Andana, and my friends usually call me Qori. I'm a student at Faculty of Computer Science 
            Universitas Indonesia. I love coding and I usually code or watch YouTube about web development or read Medium about it too 
            in my spare time. It's fun to see how many things I can create from simply sequences of characters. I have a dream of building my own 
            tech company and being Bruce Wayne in real life (apart from being the Batman and the playboy obviously).
          </p>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-user-circle"></i> : Fari Qodri Andana
          </Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-phone"></i> : +62 82232781175
          </Pill>,
          <Pill newWindow href={"https://mail.google.com/mail/?fs=1&view=cm&shva=1&to=arfixfari@gmail.com"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-envelope"></i> 1 : <span className={"link"}>arfixfari@gmail.com</span>
          </Pill>,
          <Pill newWindow href={"https://mail.google.com/mail/?fs=1&view=cm&shva=1&to=arfixfari@gmail.com"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-envelope"></i> 2 : <span className={"link"}>fari.qodri@ui.ac.id</span>
          </Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>
            <i className="fas fa-map-marker-alt"></i> : East Jakarta, Greater Jakarta Area, Indonesia
          </Pill>,
        ]}
      />
    </div>
  )
}

export default About