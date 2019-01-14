import React from 'react';
import Description from "../components/Description"
import List from "../components/List"
import TextLoop from "react-text-loop"
import { Props } from "./App";
import VisibilitySensor from "react-visibility-sensor";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { toggleVisibility } from '../actions/name';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip"

interface PropsFromDispatch {
  setVisibility: (isVisible: boolean) => void
}

const Intro: React.FunctionComponent<PropsFromDispatch & Props> = props => (
  <div id={props.id} className={props.className} style={{...props.style, position:"relative"}}>
    <Description className="welcome">
      <div style={{float: "left", paddingLeft: "10vw"}}>
        <div className="title" style={{whiteSpace:"nowrap"}}>
          I'm a<span> </span>
          <span>
            <TextLoop interval={1200}>
              <span>student</span>
              <span>programmer</span>
              <span>thinker</span>
              <span>creator</span>
              <span>software engineer</span>
              <span>learner</span>
            </TextLoop>
          </span>
        </div>
        <div className={"name"}>
          I'm <span> </span>
          <VisibilitySensor onChange={props.setVisibility}>
            <span style={{fontWeight: 500}} data-tip data-for={"qori"}>
              Fari Qodri Andana
            </span>
          </VisibilitySensor>
          <ReactTooltip id={"qori"} place={"right"} effect={"solid"}><p>Qori</p></ReactTooltip>
        </div>
      </div>
      <div className={"list-container"}>
        <List style={{float: "right"}} className={"conList"}>
          <a title={"Facebook"} rel={"noopener noreferrer"} target={"_blank"} href={"https://www.facebook.com/fari.vanpersie.7?ref=bookmarks"}><i className="fab fa-facebook"></i></a>
          <a title={"LinkedIn"}  rel={"noopener noreferrer"} target={"_blank"} href={"https://linkedin.com/in/fariqodri"}><i className="fab fa-linkedin"></i></a>
          <a title={"Gitlab"}  rel={"noopener noreferrer"} target={"_blank"} href={"https://gitlab.com/fariqodri"}><i className="fab fa-gitlab"></i></a>
          <a title={"Instagram"}  rel={"noopener noreferrer"} target={"_blank"} href={"https://www.instagram.com/fariqodri/"}><i className="fab fa-instagram"></i></a>
          <a title={"Twitter"}  rel={"noopener noreferrer"} target={"_blank"} href={"https://twitter.com/fariqodri2"}><i className="fab fa-twitter"></i></a>
        </List>
      </div>
    </Description>
    <div className={"start-button"}>
      <div style={{marginBottom: "7px"}}>and this is all about me</div>
      <AnchorLink href={"#edu"}><i style={{fontSize: "2em"}} className="fas fa-arrow-down"></i></AnchorLink>
    </div>
  </div>
)

const dispatchToProps = (dispatch: Dispatch) => ({
  setVisibility: (visible: boolean) => dispatch(toggleVisibility(visible))
})

export default connect(null, dispatchToProps)(Intro)