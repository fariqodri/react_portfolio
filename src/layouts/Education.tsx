import React, { Component } from 'react';
import { Props } from "./App";
import { Timeline, TimelineEvent, TimelineBlip } from 'react-event-timeline'
import ui from "../static/images/ui.png"
import LazyLoad from "../components/LazyLoad"

const Education: React.FunctionComponent<Props> = props => (
  <div id={props.id} style={{...props.style, paddingLeft: "5vw"}} className={props.className}>
        <h3>Higher Education Journey</h3>
        <Timeline>
          <TimelineEvent 
            title={
              <div>
                <div style={{fontSize: "1.05rem", fontWeight: 500}}><a rel={"noopener noreferrer"} target={"_blank"} href={"http://www.cs.ui.ac.id/"}>Computer Science Undergraduate</a></div>
                <div style={{fontSize: "0.85rem"}}>Universitas Indonesia</div>
              </div>
            }
            icon={<LazyLoad><img style={{borderRadius: "50%"}} src={ui} width={"100%"} height={"100%"}/></LazyLoad>}
            bubbleStyle={{borderColor: "transparent"}}
            subtitle={<p>August 2016 - January 2020</p>}
            >
            <p>
              As a computer science student, I learn and improve my skills inside and outside of the classroom. 
              During my time as a student, I did 2 internships and 2 freelance work. All of them were in software engineering role.</p>
          </TimelineEvent>
          <TimelineEvent 
            title={
              <div>
                <div style={{fontSize: "1.05rem", fontWeight: 500}}><a rel={"noopener noreferrer"} target={"_blank"} href={"http://www.cs.ui.ac.id/"}>Information Technology Postgraduate</a></div>
                <div style={{fontSize: "0.85rem"}}>Universitas Indonesia</div>
              </div>
            }
            icon={<LazyLoad><img style={{borderRadius: "50%"}} src={ui} width={"100%"} height={"100%"}/></LazyLoad>}
            bubbleStyle={{borderColor: "transparent"}}
            subtitle={<p>August 2020 - September 2022</p>}
            >
            <p>
            Learning about the role of IT in business, management, and strategy. I took this degree to gain new perspective apart from my engineer perspective.
            </p>
          </TimelineEvent>
        </Timeline>
      </div>
)

export default Education