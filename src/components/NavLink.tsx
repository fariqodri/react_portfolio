import React from "react"
import { Props } from "../layouts/App"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type NavLinkProps = {
  href: string
  onClick?: () => void
  smooth?:boolean
}

const NavLink: React.FunctionComponent<Props & NavLinkProps> = props => {
  const {href, children, style, className, id, onClick, smooth} = props
  if (smooth) {
    return (
      <div className={className} id={id}><AnchorLink onClick={onClick} style={{...style}} href={href}>{children}</AnchorLink></div>
    )
  }
  return (
    <div className={className} id={id}><a onClick={onClick} style={{...style}} href={href}>{children}</a></div>
  )
}

export default NavLink