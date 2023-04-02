// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  addBanana = () => {
    const {bananaCount} = this.state
    this.setState(prevBananaCount => ({bananaCount: prevBananaCount + 1}))
  }

  addMango = () => {
    const {mangoCount} = this.state
    this.setState(prevMangoCount => ({mangoCount: prevMangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-img"
              />
              <button type="button" onClick={this.addMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango-img"
              />
              <button type="button" onClick={this.addBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
