import React, { Component, CSSProperties } from 'react';
import '../static/css/App.css';
import Education from './Education';
import Experience from './Experience';
import Responsive from 'react-responsive';
import Navbar from "../components/Navbar"
import Intro from '../layouts/Intro';
import Headroom from 'react-headroom';
import Drawer from "../components/Drawer"
import { Skills } from './Skills';
import Projects from "./Projects"
import About from "./About"
import Footer from '../components/Footer';


export const BigScreen: React.FunctionComponent = props => <Responsive {...props} minWidth={768}/>
export const SmallScreen: React.FunctionComponent = props => <Responsive {...props} maxWidth={767}/>

// type State = {
//   isNavHideAble: boolean
// }

class App extends Component {
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
      <About id={"about"} className={"about section"} style={{paddingLeft: "5vw", paddingTop:"10px"}}/>
      <Footer id={"footer"} className={"footer"} style={{paddingTop:"10px", paddingBottom:"10px"}}/>
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
