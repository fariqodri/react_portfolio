import React from "react"
import { Props, BigScreen, SmallScreen } from "../layouts/App";

const Footer: React.FunctionComponent<Props> = props => {
  return (
    <div {...props} style={{...props.style, textAlign:"center"}}>
      <BigScreen>
        <div>
          Please fill <a href={"https://gitlab.com/fariqodri/react_portfolio"} target={"_blank"} rel={"noopener noreferrer"}>this form</a> 
          <span> </span>if you want to report any issue, suggest a feature, or say something to me.
        </div>
        <div>
          Some of the designs are inspired by <span> </span> <a href={"https://albertusangga.tech"} target={"_blank"} rel={"noopener noreferrer"}>https://albertusangga.tech</a>
          <span> </span>and Netflix
        </div>
        <div>
          You can find the source code for this website <span> </span>
          <a href={"https://gitlab.com/fariqodri/react_portfolio"} target={"_blank"} rel={"noopener noreferrer"}>here</a>
        </div>
      </BigScreen>
      <SmallScreen>
        <div>
        Please fill <a href={"https://gitlab.com/fariqodri/react_portfolio"} target={"_blank"} rel={"noopener noreferrer"}>this form</a> 
          <span> </span>if you want to report any issue, suggest a feature, or say something to me. Some of the designs are inspired by <span> </span> <a href={"https://albertusangga.tech"} target={"_blank"} rel={"noopener noreferrer"}>https://albertusangga.tech</a>
          <span> </span>and Netflix. You can find the source code for this website <span> </span> <a href={"https://gitlab.com/fariqodri/react_portfolio"} target={"_blank"} rel={"noopener noreferrer"}>here</a>
        </div>
      </SmallScreen>
    </div>
  )
}

export default Footer;