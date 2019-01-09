import React, { Component } from "react"
import LazyLoad from 'react-lazyload';
import { Props } from "../layouts/App"

const LazyLoadComponent: React.FunctionComponent = props => {
  let {children} = props;
  const c: any = children
  return (
    <LazyLoad height={"100%"}>{c}</LazyLoad>
  )
}

export default LazyLoadComponent