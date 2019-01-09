import React, {CSSProperties, Component} from "react"
import {Props} from "../layouts/App"
import NavList from "./NavbarList"
import { AppState } from "../store";
import { Dispatch } from "redux";
import {toggleDrawer} from "../actions/drawer"
import { connect } from "react-redux";

interface PropsFromState {
  isOpen: boolean
}

interface PropsFromDispatch {
  setDrawer: (isDrawerOpen: boolean) => void
}

type ReduxProps = PropsFromState & PropsFromDispatch

class Drawer extends Component<Props & ReduxProps> {
  doToDrawer = (isExpand: boolean) => () => this.props.setDrawer(isExpand);
  closeDrawer: () => void = this.doToDrawer(false);

  componentDidMount () {
    window.addEventListener("resize", this.closeDrawer)
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.closeDrawer)
  }

  render () {
    const closedStyle: CSSProperties = {
      height: "100%", 
      width: 0, 
      position: "fixed", 
      zIndex: 1, 
      top: 0, 
      right: 0,
      overflowX: "hidden",
      transition: "0.5s"
    }
    const openedStyle: CSSProperties = {...closedStyle, width: "100%"}
  
    return (
      <div className={"drawer"} style={this.props.isOpen ? openedStyle : closedStyle}>
        <div onClick={this.closeDrawer} style={{position: "absolute", top: "20px", right: "20px", fontSize:"20pt"}}>X</div>
        <NavList itemStyle={{marginBottom: "10px"}} style={{fontSize: "20pt", padding: "80px 0 0 30px"}} onClick={this.closeDrawer} vertical/>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  isOpen: state.drawer.isDrawerOpen
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDrawer: (isOpen: boolean) => dispatch(toggleDrawer(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)