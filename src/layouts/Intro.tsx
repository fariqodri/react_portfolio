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
            <span style={{fontWeight: 500}}>
              Fari Qodri Andana
            </span>
          </VisibilitySensor>
        </div>
      </div>
      <div className={"list-container"}>
        <List style={{float: "right"}} className={"conList"}>
          <a target={"_blank"} href={"https://www.facebook.com/fari.vanpersie.7?ref=bookmarks"}><i style={{color: "#3b5998"}} className="fab fa-facebook"></i></a>
          <a target={"_blank"} href={"https://linkedin.com/in/fariqodri"}><i style={{color: "#0077b5"}} className="fab fa-linkedin"></i></a>
          <a target={"_blank"} href={"https://gitlab.com/fariqodri"}><i style={{color: "#E2432A"}} className="fab fa-gitlab"></i></a>
          <a target={"_blank"} href={"https://www.instagram.com/fariqodri/"}><i style={{color: "#8a3ab9"}} className="fab fa-instagram"></i></a>
        </List>
      </div>
    </Description>
    <div style={{position: "absolute", bottom: 80, width: "100vw", textAlign: "center"}}>
      <div style={{marginBottom: "7px"}}>and this is all about me</div>
      <AnchorLink href={"#edu"}><i style={{fontSize: "2em"}} className="fas fa-arrow-down"></i></AnchorLink>
    </div>
  </div>
)

const dispatchToProps = (dispatch: Dispatch) => ({
  setVisibility: (visible: boolean) => dispatch(toggleVisibility(visible))
})

export default connect(null, dispatchToProps)(Intro)