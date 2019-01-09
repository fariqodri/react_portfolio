import React, { Component } from "react"
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group'
import { Props } from '../layouts/App';

interface ThisProps extends Props {
  interval: number
}

interface State  {
  current: number
}

export default class TextLoop extends Component<ThisProps, State> {
  interval:any
  state: State = {
    current: 0,
  }

  constructor(props: ThisProps) {
    super(props)
  }

  change = () => {
    const curr = this.state.current
    this.setState({
      current: (curr + 1) % React.Children.count(this.props.children)
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.change, this.props.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const children = React.Children.toArray(this.props.children)
    return (
      <CSSTransitionGroup
        transitionName="textLoop"
        transitionEnterTimeout={this.props.interval - 50}
        transitionLeaveTimeout={1}>
        <span style={{whiteSpace: "nowrap", ...this.props.style}} key={this.state.current.toString()}>{children[this.state.current]}</span>
      </CSSTransitionGroup>
    )
  }
}