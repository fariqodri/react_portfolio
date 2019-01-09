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
        <p>Programming Languages</p>
        <Slider {...settings}>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={80}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>JavaScript</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={70}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Java</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={85}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Python</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={80}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>TypeScript</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={30}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Go</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={60}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Erlang</div>
            </SkillCard>
          </div>
        </Slider>
        
        <br/>
        <p>Frameworks</p>
        <Slider {...settings} infinite={false} arrows={false}>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={85}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Django</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={75}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Laravel</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={70}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>Android</div>
            </SkillCard>
          </div>
        </Slider>

        <br/>
        <p>Library</p>
        <Slider {...settings} slidesToScroll={2}>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={85}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>ReactJS</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={70}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>React Native</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={80}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>ExpressJS</div>
            </SkillCard>
          </div>
          <div>
            <SkillCard 
              className={"skill-card"}
              percentage={50}
              vertical
              fillerStyle={{backgroundColor: "#89CFF0"}}
            > 
              <div className={"child"}>scikit-learn (Python)</div>
            </SkillCard>
          </div>
        </Slider>
      </div>
    )
  }
}