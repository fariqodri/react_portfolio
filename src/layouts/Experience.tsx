import React, { Component } from 'react';
import { Props } from "./App";
import { Timeline, TimelineEvent, TimelineBlip } from 'react-event-timeline'
import warpin from "../static/images/warpin.png"
import ksp from "../static/images/ksp.png"
import LazyLoad from "../components/LazyLoad"

const Experience: React.FunctionComponent<Props> = props => (
  <div id={props.id} style={{...props.style, paddingLeft: "5vw"}} className={props.className}>
    <h3>Professional Experience</h3>
    <Timeline>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"https://warungpintar.co.id/"}>Warung Pintar</a></div>}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={warpin} width={"100%"} height={"100%"}/></LazyLoad>}
        bubbleStyle={{borderColor: "transparent"}}
        subtitle = {<p>January 2018 - February 2018</p>}
      >
        <p>My responsibilities were to explore Odoo ERP and to make it ready for Warung Pintar to use it for the very first time.</p>
      </TimelineEvent>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"http://www.ksp.go.id/"}>Presidential Staff Office of Republic of Indonesia (Kantor Staf Presiden Republik Indonesia)</a></div>}
        subtitle = {<p>June 2018 - August 2018</p>}
        bubbleStyle={{borderColor: "transparent"}}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={ksp} width={"100%"} height={"100%"}/></LazyLoad>}
      >
        <p>My main task was to create a chat bot for "LAPOR!" using Laravel 
          framework. I also help maintaining and creating additional features in new 
          version of "LAPOR!" website. I was also given a <span><a rel={"noopener noreferrer"} target={"_blank"} href={"https://drive.google.com/open?id=1hOGDLYfAf2Bp7erLsoA_UPq1Ptp6hG2R"}>
          certificate</a></span> to reward my work during the internship program.</p>
      </TimelineEvent>
      <TimelineBlip
        icon= {<i className="fas fa-question"></i>}
        title = {"to be continued..."}
      />
    </Timeline>
  </div>
)

export default Experience