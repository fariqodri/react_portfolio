import React from 'react';
import { Props } from '../layouts/App';


const Description: React.FunctionComponent<Props> = props => (
  <div style={props.style} className={props.className}>
    {props.children}
  </div>
)

export default Description