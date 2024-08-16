// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onClickedRandomNumbetBtn = () => {
    const newrandomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: newrandomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Random Number</h1>
          <p className="RandomNumberGeneratorInfo">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickedRandomNumbetBtn}
          >
            Generate
          </button>
          <p className="randomNumber">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
