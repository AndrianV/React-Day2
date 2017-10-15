import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentWillMount(){
    console.log("I am the componentWillMount");
  }

  componentDidMount() {
    console.log("I am the componentDidMount");
    this.timerID = setInterval(
      () => this.tick(),
      this.props.sleepFor
    );
  }

  componentWillReceiveProps(){
    console.log("I am the componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("I am the shouldComponentUpdate");
    return true;   
  }

  componentWillUpdate(){
    console.log("I am the componentWillUpdate");        
  }

  componentDidUpdate(){
    console.log("I am the componentDidUpdate");            
  }

  componentWillUnmount() {
    console.log("I am the componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("I am the render()");
    return (
      <div>
        <h1>{this.props.greeting}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}