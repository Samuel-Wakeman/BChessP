import React from 'react';

class Timer extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 10, paused:false };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
        this.setState({time: this.state.time,
            seconds: this.state.seconds,
            paused: false})
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }

    stopTimer(){
        this.setState({paused: true})
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
     if(!(this.state.paused)){
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        paused: false
      });   
    }
      
      // Check if we're at zero.
      if (this.state.seconds === 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return(
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick = {this.stopTimer}>Stop </button>
          m: {this.state.time.m} s: {this.state.time.s}
        </div>
      );
    }
  }
  
  export default Timer;