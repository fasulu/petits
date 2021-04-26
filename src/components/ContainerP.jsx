import React, { Component } from 'react'
import './Circle.css'
import './Circle'

class ContainerP extends Component {

    constructor(props) {
        super(props);

        
    }
    render() {
        return (

            <div className="containerP1">
                <div className="divchildP1">
                    <div >
                        <Circle circleColor={this.props.player1Tokens[0] ? "white" : "black"} />
                        <Circle circleColor={this.props.player1Tokens[1] ? "white" : "black"} />
                    </div>

                    <div >
                        <Circle circleColor={this.props.player1Tokens[2] ? "white" : "black"} />
                        <Circle circleColor={this.props.player1Tokens[3] ? "white" : "black"} />
                    </div>
                </div>


                <div className="containerP2">
                    <div className="divchildP2">
                        <div >
                            <Circle circleColor={this.props.player2Tokens[0] ? "red" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[1] ? "red" : "black"} />
                        </div>

                        <div >
                            <Circle circleColor={this.props.player2Tokens[2] ? "red" : "black"} />
                            <Circle circleColor={this.props.player2Tokens[3] ? "red" : "black"} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ContainerP;