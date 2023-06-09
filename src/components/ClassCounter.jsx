import React, { Component } from 'react';

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}> icncrement</button>
        <button onClick={this.decrement}> decrement</button>
      </div>
    );
  }
}
