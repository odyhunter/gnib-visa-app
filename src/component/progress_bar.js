import React, { Component } from 'react';
const ProgressBar = require('progressbar.js');

class CircleProgressBar extends Component {
    componentDidMount() {
        this.circle = new ProgressBar.Circle(this.refs.progress, {
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            svgStyle: {
                display: 'block',
                width: '12%'
            }
        });
    }

    componentWillReceiveProps(newProps) {       
        this.circle.setText(newProps.text);
        this.circle.animate(newProps.progress);
    }

    render() {
        return (
            <div ref="progress" className="row vh-75 justify-content-center align-items-center"/>
        );
    }
}

export default CircleProgressBar;