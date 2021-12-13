import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleClick() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button onClick={()=>this.handleClick()} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
