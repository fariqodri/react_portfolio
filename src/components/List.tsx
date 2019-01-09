import React from 'react';
import { Props } from '../layouts/App';

interface ThisProps extends Props {
  horizontal?: boolean
  space?: string
}

const List: React.FunctionComponent<ThisProps> = props => {
  const list = React.Children.map(props.children, ((v, i) => {
      if (!props.horizontal) {
        return props.space ? <li style={{marginBottom: props.space}} key={i}>{v}</li> : <li key={i}>{v}</li>
      }
      return props.space ? <li style={{marginRight: props.space, display: "inline"}} key={i}>{v}</li> : <li style={{display: "inline"}} key={i}>{v}</li>
    }
  ))
  return (
    <ul className={props.className} style={{...props.style, listStyleType: "none", paddingLeft: "0px"}}>
      {list}
    </ul>
  )
}
export default List;