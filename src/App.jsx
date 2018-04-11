import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      counts: [0,0,0,0],
      newCounterValue: 0
    }

    this.addCounter = this.addCounter.bind(this)
    this.setNewCounterValue = this.setNewCounterValue.bind(this)
  }

  increment(counterIndex){
    this.setState(prevState => {
      prevState.counts[counterIndex] += 1
      return { counts: prevState.counts }
    })
  }

  decrement(counterIndex){
    this.setState(prevState => {
      prevState.counts[counterIndex] -= 1
      return { counts: prevState.counts }
    })
  }

  addCounter(event) {
    event.preventDefault()

    this.setState(prevState => {
      const newCounterInteger = parseInt(prevState.newCounterValue)
      prevState.counts.push(newCounterInteger)
      return { counts: prevState.counts, newCounterValue: 0 }
    })
  }

  removeCounter(counterIndex) {
    this.setState(prevState => {
      prevState.counts.splice(counterIndex, 1)
      return { counts: prevState.counts }
    })
  }

  setNewCounterValue(event) {
    this.setState({ newCounterValue: event.target.value })
  }

  total(){
    return this.state.counts.reduce((total, count) => total + count)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.counts.map((count, index) => {
          return <Counter
            count={count}
            key={index}
            remove={() => this.removeCounter(index)}
            increment={() => this.increment(index)}
            decrement={() => this.decrement(index)} />
          })
        }

        <form onSubmit={this.addCounter}>
          <input type="text" onChange={this.setNewCounterValue} value={this.state.newCounterValue} />
          <button>add counter</button>
        </form>
        <p>Total: {this.total()}</p>
      </div>
    );
  }
}

export default App;
