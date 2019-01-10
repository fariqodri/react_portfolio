import React from "react"
import { Props, BigScreen, SmallScreen } from "../layouts/App";
import LazyLoad from "./LazyLoad"

type ProjectProps = {
  img: any
  desc: React.ReactNode,
  techs: React.ReactNode | React.ReactNode[]
  title: React.ReactNode
  placeholder?:React.ReactNode
}

const Project: React.FunctionComponent<Props & ProjectProps> = props => {
  let {title, img, desc, techs} = props
  
  return (
    <div style={{width: "100%", marginTop: "50px"}}>
      <div style={{width: "100%", textAlign:"center"}}>
        {title}
      </div>
      <BigScreen>
        <div style={{...props.style, display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around", flexGrow: 1}}>
          <div style={{flex: 1}}>
            {desc}
          </div>
          <div style={{textAlign: "center", flex: 1}}>
            <LazyLoad placeholder={props.placeholder}>
              {img}
            </LazyLoad>
          </div>
          <div style={{flex: 1}}>
            {React.Children.map(techs, (v:any) => React.cloneElement(v, {key: v.props.children}))}
          </div>
        </div>
      </BigScreen>
      <SmallScreen>
        <div style={{...props.style}}>
          <div style={{textAlign: "center", width: "100%"}}>
            <LazyLoad placeholder={props.placeholder}>
              {img}
            </LazyLoad>
          </div>
          <div style={{textAlign: "center"}}>
            {React.Children.map(techs, (v:any) => React.cloneElement(v, {key: v.props.children}))}
          </div>
        </div>
        <div style={{width: "100%"}}>
          {desc}
        </div>
      </SmallScreen>
    </div>
  )
}

export default Project