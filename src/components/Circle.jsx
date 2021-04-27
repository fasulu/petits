import React, { Component } from 'react'
import './Circle.css'

class Circle extends Component {
    render() {

        console.log("circle color in Circle.jsx", this.props.circleColor)
        return (
            <i className="fas fa-circle" style={{color: this.props.circleColor}}></i>
        )
    }
}

export default Circle