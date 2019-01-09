

// declare module 'react-text-loop' {
  
//   const TextLoop: React.FunctionComponent<Props, any> 
//   export default TextLoop
// }

declare module "react-text-loop"{
  import React, { Component } from "react"

  type Props = {
    interval?: number | Array
    delay?: number
    adjustingSpeed?: number
    springConfig?: object
    fade?: boolean
    mask?: boolean
    noWrap?: boolean
    className?: string
  }

  declare class TextLoop extends Component<Props, any>{}

  declare const TextLoopType: typeof TextLoop
  export default TextLoopType;
}