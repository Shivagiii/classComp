
import './App.css';
import React from 'react';

export default class App extends React.Component {

  constructor(props){
    super();
    this.state={
      count:0
    };

  }

  render() {
    return (
      <div className="App">
        <h2>Counter App</h2>

        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({count:this.state.count+1})}>Increment</button>
        <button onClick={() => this.setState({count:this.state.count-1})}>Decrement</button>
        
      </div>
    );
  }
}
