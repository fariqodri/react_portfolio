import React, { Component, CSSProperties } from "react"
import { Props } from "../layouts/App";

type PillProps = {
  hoverColor?: string
  borderRadius?: number
  href?:string
  newWindow?:boolean
}

type PillState = {
  isHover: boolean
}

export default class Pill extends Component<PillProps & Props, PillState> {
  state: PillState = {
    isHover: false
  }

  static defaultProps = {
    borderRadius: "5px"
  }

  handleMouseEnter = () => {
    this.setState({isHover: true})
  }

  handleMouseLeave = () => {
    this.setState({isHover: false})
  }

  render() {
    let {className, id, style, children, hoverColor, borderRadius, href, newWindow} = this.props
    className = className ? ` ${className}` : ""
    const {isHover} = this.state
    const realStyle: CSSProperties = {...style, borderRadius: borderRadius}
    const hoverStyle: CSSProperties = {...realStyle, backgroundColor: hoverColor}
    const appliedStyle: CSSProperties = isHover ? hoverStyle : realStyle
    return (
      <a href={href} target={newWindow ? "_blank" : "_self"}>
        <button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} id={id} className={`pill-button${className}`} style={{...appliedStyle, padding: "10px", margin: "5px", cursor: "pointer"}}>
          {children}
        </button>
      </a>
    )
  }
  
}