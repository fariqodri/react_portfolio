import React, { Component, CSSProperties } from 'react';
import '../App.css';
import Education from './Education';
import Experience from './Experience';
import Responsive from 'react-responsive';
import Navbar from "../components/Navbar"
import Intro from '../layouts/Intro';
import Headroom from 'react-headroom';
import Drawer from "../components/Drawer"
import { Skills } from './Skills';
import Projects from "./Projects"

export const BigScreen: React.FunctionComponent = props => <Responsive {...props} minWidth={768}/>
export const SmallScreen: React.FunctionComponent = props => <Responsive {...props} maxWidth={767}/>

// type State = {
//   isNavHideAble: boolean
// }

class App extends Component {

  resize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  componentDidMount () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }

  public render() {
    return (
      <div className="App">
      <Headroom upTolerance={1}>
        <Navbar/>
      </Headroom>
      <Drawer/>
      <Intro id={"intro"} className={"intro section"}/>
      <Education style={{paddingTop:"10px"}} id={"edu"} className={"edu section"}/>
      <Experience style={{paddingTop:"10px"}} id={"exp"} className={"exp section"}/>
      <Skills id={"skills"} className={"skills section"} style={{paddingTop:"10px"}}/>
      <Projects id={"projects"} className={"projects section"} style={{paddingLeft: "5vw", paddingTop:"10px"}}/>
    </div>
    )
  }
}

// const App: React.FunctionComponent = () => {
//   return (
//     <div className="App">
//       <Headroom upTolerance={1}>
//         <Navbar/>
//       </Headroom>
//       <Drawer/>
//       <Intro id={"intro"} className={"intro section"} style={{height: "100vh"}}/>
//       <Education style={{paddingTop:"10px"}} id={"edu"} className={"edu section"}/>
//       <Experience style={{paddingTop:"10px"}} id={"exp"} className={"exp section"}/>
//       <Skills id={"skills"} className={"skills section"} style={{paddingTop:"10px"}}/>
//       <Projects id={"projects"} className={"projects section"} style={{paddingLeft: "5vw", paddingTop:"10px"}}/>
//     </div>
//   )
// }

export interface Props {
  style?: CSSProperties
  className?: string
  id?:string
}

export default App;
