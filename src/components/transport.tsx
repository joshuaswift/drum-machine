import * as React from 'react';
import {Instrument} from './instrument';

export class Transport extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{color : 'pink'}}>Web-808</h1>
        <Instrument/>
      </div>
    )
  }
}