import React, { Component } from "react"
import LazyLoad from 'react-lazyload';
import { Props } from "../layouts/App"

type LazyLoadProps = {
  placeholder?: React.ReactNode
}

const LazyLoadComponent: React.FunctionComponent<Props & LazyLoadProps> = props => {
  let {children, placeholder} = props;
  const c: any = children
  return (
    <LazyLoad placeholder={placeholder} height={"100%"}>{c}</LazyLoad>
  )
}

export default LazyLoadComponent