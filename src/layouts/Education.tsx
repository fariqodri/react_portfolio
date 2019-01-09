import React, { Component } from 'react';
import { Props } from "./App";
import { Timeline, TimelineEvent, TimelineBlip } from 'react-event-timeline'
import ui from "../images/ui.png"
import LazyLoad from "../components/LazyLoad"

const Education: React.FunctionComponent<Props> = props => (
  <div id={props.id} style={{...props.style, paddingLeft: "5vw"}} className={props.className}>
        <h3>Higher Education Journey</h3>
        <Timeline>
          <TimelineEvent 
            title={
              <div>
                <div style={{fontSize: "1.05rem", fontWeight: 500}}><a target={"_blank"} href={"http://www.cs.ui.ac.id/"}>Computer Science Undergraduate Student</a></div>
                <div style={{fontSize: "0.85rem"}}>Universitas Indonesia</div>
              </div>
            }
            icon={<LazyLoad><img style={{borderRadius: "50%"}} src={ui} width={"100%"} height={"100%"}/></LazyLoad>}
            bubbleStyle={{borderColor: "transparent"}}
            subtitle={<p>August 2016 - Present</p>}
            >
            <p>I take a lot of courses that help to improve my skill, including but not 
              limited to website design and programming, data structures and algorithm, software engineering. 
              Besides studying, I participate in a lot of activities, therefore I know how to interact with people whom have the 
              same interests with me.</p>
          </TimelineEvent>
          <TimelineBlip
            icon= {<i className="fas fa-question"></i>}
            title={"to be continued..."}
          />
        </Timeline>
      </div>
)

export default Education