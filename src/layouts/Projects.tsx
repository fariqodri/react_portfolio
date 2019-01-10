import React from "react"
//Images
import fqa from "../static/images/macbookfqa.png"
import lapor from "../static/images/macbooklapor.png"
import tanamin from "../static/images/macbooktanamin.png"
import lki from "../static/images/macbooklki.png"
import port from "../static/images/macbookport2.png"

//Thumbnails
import fqa_thumb from "../static/images/macbookfqa_thumb.png"
import lapor_thumb from "../static/images/macbooklapor_thumb.png"
import tanamin_thumb from "../static/images/macbooktanamin_thumb.png"
import lki_thumb from "../static/images/macbooklki_thumb.png"
import port_thumb from "../static/images/macbookport2_thumb.png"

import Project from "../components/Project"
import { Props } from "./App";
import Pill from "../components/Pill"
import Description from "../components/Description";

const Projects: React.FunctionComponent<Props> = props => {
  const {className, id, style} = props
  return (
    <div className={className} id={id} style={{...style}}>
      <h3>My Projects Gallery</h3>
      <Project
        title={<h4><a rel={"noopener noreferrer"} href={"http://fariqodri.herokuapp.com"} target={"_blank"}>Personal Portfolio V1</a></h4>}
        img={<img className={"mockup"} src={fqa}/>}
        placeholder={<img src={fqa_thumb} height={"100%"}></img>}
        desc={
          <Description className={"proj-desc"}>
            Lorem ipsum
          </Description>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://www.djangoproject.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Django</Pill>,
          <Pill newWindow href={"https://jquery.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>jQuery</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>SQLite</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Gitlab</Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Heroku</Pill>,
        ]}
      />
      <Project
        title={<h4><a rel={"noopener noreferrer"} href={"https://v3.lapor.go.id/"} target={"_blank"}>LAPOR V3</a></h4>}
        img={<img className={"mockup"} src={lapor}/>}
        placeholder={<img src={lapor_thumb} height={"100%"}></img>}
        desc={
          <Description className={"proj-desc"}>
            Lorem ipsum
          </Description>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://laravel.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Laravel</Pill>,
          <Pill newWindow href={"https://jquery.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>jQuery</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>MySQL</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://octobercms.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>October CMS</Pill>
        ]}
      />
      <Project
        title={<h4><a rel={"noopener noreferrer"} href={"http://tanamin.herokuapp.com/"} target={"_blank"}>tanamin</a></h4>}
        img={<img className={"mockup"} src={tanamin}/>}
        placeholder={<img src={tanamin_thumb} height={"100%"}></img>}
        desc={
          <Description className={"proj-desc"}>
            Lorem ipsum
          </Description>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill newWindow href={"https://www.djangoproject.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Django</Pill>,
          <Pill newWindow href={"https://jquery.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>jQuery</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>SQLite</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://en.wikipedia.org/wiki/Constraint_satisfaction_problem"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Artificial Intelligence</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Gitlab</Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Heroku</Pill>,
        ]}
      />
      <Project
        title={<h4><a rel={"noopener noreferrer"} href={"http://lantaikayuindonesia.herokuapp.com/"} target={"_blank"}>Lantai Kayu Indonesia</a></h4>}
        img={<img className={"mockup"} src={lki}/>}
        placeholder={<img src={lki_thumb} height={"100%"}></img>}
        desc={
          <Description className={"proj-desc"}>
            Lorem ipsum
          </Description>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>jQuery</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>JavaScript</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Gitlab</Pill>,
          <Pill newWindow href={"https://www.heroku.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Heroku</Pill>,
        ]}
      />
      <Project
        title={<h4><a rel={"noopener noreferrer"} href={"https://fariqodri.com/"} target={"_blank"}>Personal Portfolio V2</a></h4>}
        img={<img className={"mockup"} src={port}/>}
        placeholder={<img src={port_thumb} height={"100%"}></img>}
        desc={
          <Description className={"proj-desc"}>
            Lorem ipsum
          </Description>
        }
        techs={[
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>ReactJS</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>HTML</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Redux</Pill>,
          <Pill hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>CSS</Pill>,
          <Pill newWindow href={"https://gitlab.com/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Gitlab</Pill>,
          <Pill newWindow href={"https://cloud.google.com/compute/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>Google Cloud Platform</Pill>,
          <Pill newWindow href={"https://www.typescriptlang.org/"} hoverColor={"#0080FF"} style={{backgroundColor:"transparent", border:"1px solid #0080FF"}}>TypeScript</Pill>,
        ]}
      />
    </div>
  )
}

export default Projects