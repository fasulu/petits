import React from "react";
import './App.css'
import Circle from "./components/Circle.jsx"
import ContainerP from "./components/ContainerP.jsx";
import Winner from "./pic/winner.gif"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      numDee: 0,
      numCase: 0,
      numDee2: 0,
      numCase2: 0,
      player1Tokens: [false, false, false, false],
      player2Tokens: [false, false, false, false],
      currentPlayer: 1,
      winner: ""

    }

    this.lancerDee = this.lancerDee.bind(this)
    this.renderVictory = this.renderVictory.bind(this)
  }


  lancerDee() {
    const dee = Math.floor(Math.random() * 6 + 1)
    console.log("numDEE :", dee);

    const player = this.state.currentPlayer

    if (player === 1) {

      // if (this.state.numCase !== 0 || (this.state.player1Tokens.indexOf(true) !== -1 && dee === 6)) {
      if (this.state.numCase !== 0 || dee === 6) {
        this.setState({
          numDee: dee,
          numCase: this.state.numCase + dee,
          currentPlayer: 2
        })
      } else {
        this.setState({
          numDee: dee,
          currentPlayer: 2
        })
      }


    } else if (player === 2) {

      if (this.state.numCase2 !== 0 || dee === 6) {
        this.setState({
          numDee2: dee,
          numCase2: this.state.numCase2 + dee,
          currentPlayer: 1
        })
      } else {
        this.setState({
          numDee2: dee,
          currentPlayer: 1
        })
      }

    }
  }

  renderCircles(n, p) {
    let circlesArray = []

    for (let index = n; index <= p; index++) {
      if (this.state.numCase2 === index) {
        circlesArray.push(<Circle key={index} circleColor="#ec4444" />)
      } else if (this.state.numCase === index) {
        circlesArray.push(<Circle key={index} circleColor="greenyellow" />)
      } else {
        circlesArray.push(<Circle key={index} circleColor="black" />)
      }

      if (this.state.numCase > 37) {
        const arrayTokens = [...this.state.player1Tokens]
        const indexFirstFalse = arrayTokens.indexOf(false)

        arrayTokens[indexFirstFalse] = true

        this.setState({

          numCase: 1,
          player1Tokens: arrayTokens
        })
      } else if (this.state.numCase2 > 37) {
        const arrayTokens2 = [...this.state.player2Tokens]
        const indexSecondFalse = arrayTokens2.indexOf(false)

        arrayTokens2[indexSecondFalse] = true

        this.setState({
          numCase2: 1,
          player2Tokens: arrayTokens2

        })

      }

    }

    return circlesArray
  }

  renderVictory() {

    if (this.state.player1Tokens[3] === "true") {
      this.setState({
        winner: "Player 1 won the race"
      })

    } else if (this.state.player2Tokens[3] === "true") {
      this.setState({
        winner: "Player 2 won the race"
      })

    }
    console.log("the winner is ", this.state.winner)

    if (this.state.player1Tokens.indexOf(false) === -1 || this.state.player2Tokens.indexOf(false) === -1) {
      return (
        <div className="container-fluid">
          <p> {this.state.winner} You Win !</p>
          <div className="" style={{ background: `url(${Winner})`, height: `${window.innerHeight}px`, backgroundRepeat: "no-repeat", marginLeft: "7vmax" }} />
        </div>)
    } else {
      return (
        <div className="container-fluid">
          <div id="jeu">

            <div className="grid-game">

              {this.renderCircles(1, 1)}

              <div className="flex">
                {this.renderCircles(2, 9)}
              </div>

              {this.renderCircles(10, 10)}

              <div className="flex grid-item-4">
                {this.renderCircles(29, 36)}
              </div>

              <div className="flex grid-item-5">
              <div> 
                
                <ContainerP player1Tokens={this.state.player1Tokens} player2Tokens={this.state.player2Tokens} />

              </div>

                <div className="numeroDee">

                  <span className="spanP1">{this.state.numDee}</span>
                  <i className="fas fa-chess-knight logo"></i>

                  <span className="spanP2">{this.state.numDee2}</span>
                  <p>Petit Chevaux</p>
                  <button className={this.state.currentPlayer === 1 ? "b1" : "b2"} onClick={this.lancerDee}>Tirer dée du jouer {this.state.currentPlayer}</button>
                </div>

              </div>

              <div className="flex grid-item-6">
                {this.renderCircles(11, 18)}
              </div>

              {this.renderCircles(28, 28)}

              <div className="flex grid-item-8">
                {this.renderCircles(20, 27)}
              </div>

              {this.renderCircles(19, 19)}

            </div>

          </div>

        </div>
      )
    }
  }

  render() {

    return (
      <div>{this.renderVictory()}</div>
    )
  }

}

export default App