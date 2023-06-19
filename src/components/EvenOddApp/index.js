import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const n = Math.random() * 100
    this.setState(prevState => ({
      count: prevState.count + Math.floor(n),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <h1>Count {count}</h1>
        {count % 2 === 0 && <p>Count is Even</p>}
        {!(count % 2 === 0) && <p>Count is Odd</p>}
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
