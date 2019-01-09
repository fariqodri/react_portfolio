import React, { Component, CSSProperties } from "react"
import { Props } from "../layouts/App";
import VisibilitySensor from "react-visibility-sensor"

type CardState = {
  hasRisen: boolean
}

type SkillProps = {
  percentage: number
  vertical?:boolean
  fillerStyle: CSSProperties
  transition?:number
}

export class SkillCard extends Component<Props & SkillProps, CardState> {
  state: CardState = {
    hasRisen: false
  }

  static defaultProps = {transition: 1000}

  setVisibility = (isVisible: boolean) => {
    if (!this.state.hasRisen) {
      this.setState({hasRisen: isVisible})
    }
  }

  shouldComponentUpdate(_: any, nextState: CardState) {
    return !this.state.hasRisen && nextState.hasRisen
  }

  render() {
    let filler: React.ReactNode;
    let transition: string;

    if (this.props.vertical) {
      transition = `height ${this.props.transition}ms linear`
      if (this.state.hasRisen) {
        filler = <Filler className={"filler"} percentage={this.props.percentage} vertical style={{...this.props.fillerStyle, transition}}/> 
      } else {
        filler = <Filler className={"filler"} percentage={0} vertical style={{...this.props.fillerStyle, transition}}/> 
      }
    } else {
      transition = `width ${this.props.transition}ms linear`
      if (this.state.hasRisen) {
        filler = <Filler className={"filler"} percentage={this.props.percentage} style={{...this.props.fillerStyle, transition}}/>
      } else {
        filler = <Filler className={"filler"} percentage={0} style={{...this.props.fillerStyle, transition}}/>
      }
    }

    return(
      <VisibilitySensor onChange={this.setVisibility} partialVisibility={true} offset={{left: 50}}>
        <div className={this.props.className} style={{...this.props.style, position:"relative"}}>
          {filler}
          {React.Children.map(this.props.children, (c: any) => {
              // if (this.props.percentage < 40) {
              //   return React.cloneElement(c, {style: {...c.props.style, width: "100%", color: "white"}})
              // }
              return React.cloneElement(c, {style: {...c.props.style, width: "100%"}})
            })
          }
        </div>
      </VisibilitySensor>
    )
  }
}

type FillerProps = {
  percentage: number
  vertical?:boolean
}

const Filler: React.FunctionComponent<Props & FillerProps> = (props) => {
  if (props.vertical) {
    return <div className={props.className} style={{...props.style, height:`${props.percentage}%`, position: "absolute", bottom: 0, width: "100%"}}></div>
  } else {
    return <div className={props.className} style={{...props.style, width:`${props.percentage}%`, height: "100%"}}></div>
  }
}