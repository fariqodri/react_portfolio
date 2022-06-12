import React, { Component } from "react"
import { Props } from "./App";
import { SkillCard } from "../components/SkillCard";
import Slider, {Settings} from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type SkillsState = {
  isBigScreen: boolean
}

export class Skills extends Component<Props, SkillsState> {

  state: SkillsState = {
    isBigScreen: screen.width >= 768
  }
  
  updateDimension = () => {
    this.setState({isBigScreen: screen.width >= 768})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimension)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension)
  }

  public render() {
    let settings: Settings;
    if (this.state.isBigScreen) {
      settings = {
        className: "slider",
        dots: false,
        slidesToScroll: 3,
        adaptiveHeight: true,
        variableWidth: true,
        draggable: false
      }
    } else {
      settings = {
        className: "slider",
        dots: false,
        slidesToScroll: 3,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true
      };
    }

    return (
      <div id={this.props.id} className={this.props.className} style={{...this.props.style, paddingLeft: "5vw"}}>
        <h3>My Skills</h3>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
          <div style={{flexGrow: 1}}>
            <b>Programming Languages</b>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Go</li>
              <li>Shell</li>
              <li>SQL</li>
            </ul>
          </div>
          <div style={{flexGrow: 1}}>
            <b>Frameworks</b>
            <ul>
              <li>Django</li>
              <li>NestJS</li>
              <li>Laravel</li>
              <li>Android SDK</li>
              <li>ReactJS</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div style={{flexGrow: 1}}>
            <b>Tools</b>
            <ul>
              <li>Apache Spark</li>
              <li>Apache Kafka</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}