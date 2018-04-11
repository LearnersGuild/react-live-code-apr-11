import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.decrement}>-</button>
                {this.props.count}
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.remove}>X</button>
            </div>
        );
    }
}

export default Counter;
