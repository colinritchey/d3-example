import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);

    let currentTime = new Date();
    let isAmPm = currentTime.getHours() > 11 ? 'A.M.' : 'P.M.'

    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      amOrPm: isAmPm
    };

    this.padding = this.padding.bind(this);
  }

  componentDidMount(){
    setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  updateTime(){
    let newSeconds = this.state.seconds + 1;
    let newHours = this.state.hours;
    let newMinutes = this.state.minutes;
    let newAmOrPm = this.state.amOrPm;

    if(newSeconds >= 60){
      newSeconds = 0;
      newMinutes++;
    }

    if(newMinutes >= 60){
      newMinutes = 0;
      newHours++;
    }

    if(newHours >= 24){
      newHours = 0;
      newAmOrPm = 'A.M.'
    }

    if(newHours >= 12){
      newAmOrPm = 'P.M.'
    }

    this.setState({
      seconds: newSeconds,
      minutes: newMinutes,
      hours: newHours,
      amOrPm: newAmOrPm
    })

  }

  padding(num){
    return num < 9 ? `0${num}` : num
  }


  render(){

    let time = this.state;
    let hour = time.hours % 12;

    let timerString = [hour, time.minutes, time.seconds].reduce((memo, el, idx) => {
      return idx !== 2 ? memo + this.padding(el) + ':' : memo + this.padding(el)
    }, '');

    return(
      <p>{timerString} {time.amOrPm}</p>
    )

  }
}

export default Timer;
