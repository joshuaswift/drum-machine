import * as React from 'react';
import {Kick} from '../engines/kick';
import {Transport} from 'tone';

export class Instrument extends React.Component{
  private kick: Kick;
  private ctx: AudioContext;

  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.kick = new Kick(this.ctx);
    console.log(Transport);

    Transport.bpm.value = 120;
    Transport.schedule(this.startLoop, "0");

    Transport.loop = true;
    Transport.loopEnd = '1m';
  }

  public startLoop = (time: number) => {
    console.log('start loop', time);
    this.kick.trigger(time);
    this.kick.trigger(time + 0.5);
    this.kick.trigger(time + 1);
    this.kick.trigger(time + 1.5);
  }

  public handleClick = () => {
    Transport.start();
  }

  render() {
    return (
    <div>
      <button onClick={this.handleClick}>
        808
      </button>
    </div>
    )
  }
}