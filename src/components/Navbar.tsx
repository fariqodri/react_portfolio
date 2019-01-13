import React, { Component, CSSProperties } from "react"
import ReactDOM from "react-dom"
import { Props, BigScreen, SmallScreen } from "../layouts/App";
import {AppState} from "../store"
import { connect } from "react-redux";
import NavList from "./NavbarList"
import {toggleDrawer} from "../actions/drawer"
import { Dispatch } from 'redux';
import {CSSTransitionGroup} from "react-transition-group"

interface PropsFromState {
  isNameVisible: boolean  
}

interface PropsFromDispatch {
  setDrawer: (isDrawerOpen: boolean) => void
}

type ReduxProps = PropsFromState & PropsFromDispatch

type NavState = {
  isExpanded: boolean
}


class Navbar extends Component<ReduxProps & Props, NavState> {
  state:NavState = {
    isExpanded: false
  }

  doToDrawer = (isExpand: boolean) => () => this.props.setDrawer(isExpand);

  shouldComponentUpdate(nextProps: PropsFromState & Props, nextState: NavState) {
    return this.state.isExpanded != nextState.isExpanded || this.props.isNameVisible != nextProps.isNameVisible
  }

  render() {
    const brand = this.props.isNameVisible ? "FQA" : "Fari Qodri Andana"
    const openDrawer: () => void = this.doToDrawer(true);
    
    return (
      <div style={{...this.props.style, display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoFlow: "column"}} className={`navbar${this.props.className ? " " + this.props.className : ""}`}>
        <CSSTransitionGroup
          transitionName={"brand"}
          transitionEnterTimeout={500}
          transitionLeave={false}
        >
          <div key={brand} style={{cursor: "pointer", float: "left"}} onClick={() => window.location.reload()}>
            {brand}
          </div>
        </CSSTransitionGroup>
        <BigScreen>
          <NavList className={"menu"}/>
        </BigScreen>
        <SmallScreen>
          <div onClick={openDrawer} style={{width: "100%", textAlign: "end"}}><i className="fas fa-bars"></i></div>
        </SmallScreen>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  isNameVisible: state.nameVisibility.isNameVisible
})

const mapDispatchToPops = (dispatch: Dispatch) => ({
  setDrawer: (isDrawerOpen: boolean) => dispatch(toggleDrawer(isDrawerOpen))
})

export default connect(mapStateToProps, mapDispatchToPops)(Navbar)