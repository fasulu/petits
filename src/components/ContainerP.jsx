import React, { Component } from 'react'
import './Circle.css'
import Circle from "./Circle"

class ContainerP extends Component {

    constructor(props) {
        super(props);


    }
    render() {
        // console.log("render in containerP", this.props.player1Tokens)
        // console.log("render in containerP", this.props.player2Tokens)
        return (

            <div className="containerP1">
                <div className="divchildP1">
                    <div >
                        <Circle circleColor={this.props.player1Tokens[0] ? "green" : "black"} />
                        <Circle circleColor={this.props.player1Tokens[1] ? "green" : "black"} />
                    </div>

                    <div >
                        <Circle circleColor={this.props.player1Tokens[2] ? "green" : "black"} />
                        <Circle circleColor={this.props.player1Tokens[3] ? "green" : "black"} />
                    </div>
                </div>


                <div className="containerP2">
                    <div className="divchildP2">
                        <div >
                            <Circle circleColor={this.props.player2Tokens[0] ? "orange" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[1] ? "orange" : "black"} />
                        </div>

                        <div >
                            <Circle circleColor={this.props.player2Tokens[2] ? "orange" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[3] ? "orange" : "black"} />
                        </div>
                    </div>
                </div>
                {/* <i className="fas fa-circle" style={{ color: this.props.circleColor }}></i> */}
            </div>

        )
    }
}

export default ContainerP;