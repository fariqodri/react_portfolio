import React, { CSSProperties } from "react"
import { Props } from "../layouts/App";
import NavLink from "./NavLink"

type NavListProps = {
  vertical?:boolean
  onClick?:() => void
  itemStyle?: CSSProperties
}

const NavList: React.FunctionComponent<Props & NavListProps> = (props) => {
  const {vertical, onClick, style, itemStyle} = props
  return (
    <div className={props.className} style={{display: "flex", flexDirection: vertical ? "column" : "row", ...style}}>
      <div style={{...itemStyle}}>
        <NavLink onClick={onClick} smooth style={{textDecoration: "none"}} href={"#intro"}>Welcome</NavLink>
      </div>
      <div style={{...itemStyle}}>
        <NavLink onClick={onClick} smooth style={{textDecoration: "none"}} href={"#edu"}>Education</NavLink>
      </div>
      <div style={{...itemStyle}}>
        <NavLink onClick={onClick} smooth style={{textDecoration: "none"}} href={"#exp"}>Experience</NavLink>
      </div>
      <div style={{...itemStyle}}>
        <NavLink onClick={onClick} smooth style={{textDecoration: "none"}} href={"#skills"}>Skills</NavLink>
      </div>
      <div style={{...itemStyle}}>
        <NavLink onClick={onClick} smooth style={{textDecoration: "none"}} href={"#projects"}>Projects</NavLink>
      </div>
    </div>
  )
}

export default NavList