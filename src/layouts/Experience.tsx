import React from 'react';
import { Props } from "./App";
import { Timeline, TimelineEvent, TimelineBlip } from 'react-event-timeline'
import kata from "../static/images/kata_logo.png"
import pinhome from "../static/images/pinhome_logo.png"
import telkomsel from "../static/images/telkomsel_logo.jpeg"
import dibimbing from "../static/images/dibimbing_logo.png"
import LazyLoad from "../components/LazyLoad"

const Experience: React.FunctionComponent<Props> = props => (
  <div id={props.id} style={{...props.style, paddingLeft: "5vw"}} className={props.className}>
    <h3>Professional Experience</h3>
    <Timeline>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"https://kata.ai/"}>Kata.ai</a></div>}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={kata} width={"100%"} height={"100%"}/></LazyLoad>}
        bubbleStyle={{borderColor: "transparent"}}
        subtitle = {<p>December 2019 - February 2021</p>}
      >
        <p>
          Kata.ai is a chatbot and conversational AI startup. Its main product is a platform to build the chatbot and AI model. 
          During my time at Kata, I served two roles as a data engineer and software engineer.
        </p>
        <h3>Software Engineer</h3>
        <p>
          <ul>
            <li>
              Involved in the company's effort to upgrade its NLP and chatbot development platform.
            </li>
            <li>
              Explore and research the OAuth ecosystem, and how we might be able to deploy and maintain the technology in Kubernetes to serve the new platform
            </li>
          </ul>
        </p>
        <h3>Data Engineer</h3>
        <p>
          <ul>
            <li>
              Involved in the development and maintenancce of big data processing infrastructure with Hadoop ecosystem, Kubernetes, and AWS.
            </li>
            <li>
              Conducted various experiments to make the processing pipeline cheaper, faster, and easier to maintain and track.
            </li>
            <li>
              Developed a library to easily send message from the services the data ingestion pipeline with Kafka and Avro schema. The library was 
              written for 2 languages, Go and Python
            </li>
          </ul>
        </p>
      </TimelineEvent>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"http://pinhome.id"}>Pinhome</a></div>}
        subtitle = {<p>February 2021 - December 2021</p>}
        bubbleStyle={{borderColor: "transparent"}}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={pinhome} width={"100%"} height={"100%"}/></LazyLoad>}
      >
        <p>Pinhome is a property marketplace and home service startup. My responsibility in Pinhome as a <b>software engineer</b> was:</p>
        <p>
          <ul>
            <li>
              Involved in the development of backend system of a property marketplace application. All of the backend was written with Go language, 
              and the database used was PostgreSQL and ElasticSearch.
            </li>
            <li>
              Created a Kubernetes YAML file to deploy a new service to the company's Kubernetes cluster.
            </li>
            <li>
              Involved in the improvement of the property discovery part of the Pinhome's main website.
            </li>
          </ul>
        </p>
      </TimelineEvent>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"http://telkomsel.com"}>Telkomsel</a></div>}
        subtitle = {<p>December 2021 - Present</p>}
        bubbleStyle={{borderColor: "transparent"}}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={telkomsel} width={"100%"} height={"100%"}/></LazyLoad>}
      >
        <p>
          Telkomsel is the biggest telecommunication operator in Indonesia with more tha 170 million subscribers. I'm currently assigned 
          at the department whose function is detect fraud and revenue assurance. My responsibility in this department is:
        </p>
        <p>
          <ul>
            <li>
              Involved in the development and maintenance of the revenue assurance and fraud management platform. 
              This platform mainly uses HDFS as data storage layer and Apache Spark as the data processing layer.
            </li>
            <li>
              Coordinating with an international team consisting of Indians, Malaysians, and Indonesians on the daily basis
            </li>
          </ul>
        </p>
      </TimelineEvent>
      <TimelineEvent
        title = {<div style={{fontSize: "1.05rem"}}><a rel={"noopener noreferrer"} target={"_blank"} href={"https://dibimbing.id/"}>Dibimbing</a></div>}
        subtitle = {<p>April 2022 - Present</p>}
        bubbleStyle={{borderColor: "transparent"}}
        icon={<LazyLoad><img style={{borderRadius: "50%"}} src={dibimbing} width={"100%"} height={"100%"}/></LazyLoad>}
      >
        <p>
          Dibimbing is an IT bootcamp startup that focuses on preparing its students to work in Indonesian best tech startup. 
          It offers a wide range of courses from web development to data science. My responsibility as a <b>freelance mentor</b> in Dibimbing is:
        </p>
        <p>
          <ul>
            <li>
              Teach in various Dibimbing web development courses. So far, I have taught in 3 different courses which in total consist of 9 meetings. 
              The courses I have taught are <b>database, programming fundamental, and intro to web development with JavaScript</b>
            </li>
            <li>
              Give take-home assignments to the students and evaluate them.
            </li>
          </ul>
        </p>
      </TimelineEvent>
      <TimelineBlip
        icon= {<i className="fas fa-question"></i>}
        title = {"to be continued..."}
      />
    </Timeline>
  </div>
)

export default Experience