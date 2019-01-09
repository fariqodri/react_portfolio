declare module 'react-anchor-link-smooth-scroll'{
  import React, { Component, CSSProperties } from "react"

  type Props = {
    offset?: string | Function
    href?: string
    onClick?: Function
    style?: CSSProperties
  }

  declare class AnchorLink extends Component<Props, any>{}

  declare const AnchorLinkType: typeof AnchorLink
  export default AnchorLinkType;
}