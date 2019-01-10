import React from 'react';
import { Props } from '../layouts/App';

interface ThisProps extends Props {
  horizontal?: boolean
  space?: string
}

const List: React.FunctionComponent<ThisProps> = props => {
  const list = React.Children.map(props.children, ((v, i) => {
      if (!props.horizontal) {
        return props.space ? <div style={{marginBottom: props.space}} key={i}>{v}</div> : <div key={i}>{v}</div>
      }
      return props.space ? <div style={{marginRight: props.space}} key={i}>{v}</div> : <div style={{}} key={i}>{v}</div>
    }
  ))
  return (
    <div className={props.className} style={{...props.style, paddingLeft: "0px", display: "flex"}}>
      {list}
    </div>
  )
}
export default List;