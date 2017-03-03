const data = require('../../../public/data').animated;
import Plotly from 'plotly.js';
import React from 'react';

export class Animated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    frameId = 0;

    componentWillMount() {
        let x    = [];
        let y    = [];
        let skip = 15;
        let n    = 10092;
        let i    = 0;

        x.push(i * 0.01);
        y.push(data[i]["LED 1"]);


        this.setState({
            x,
            y
        });
        const compute = () => {
            i += skip;
            if (i > n) {
                i = 0;
            }
            if (x.length > 1000 / skip) {
                y.shift();

            } else {
                x.push(i * 0.01);

            }
            y.push(data[i]["LED 1"]);
            this.setState({
                x,
                y
            })
        };

        setInterval(compute, 200);
    }

    componentDidMount() {

        Plotly.newPlot('animated',
            [{
                x   : this.state.x,
                y   : this.state.y,
                mode: 'line',
                line: {
                    shape: 'spline'
                },
                type: 'scatter'
            }],
            {
                xaxis: {
                    range: [0,
                            10]
                },
                yaxis: {
                    range: [0.245,
                            0.27]
                },
                title: 'Some Updating Data'
            },
            {
                showLink   : false,
                displaylogo: false
            }
        );
        const update = () => {
            Plotly.animate('animated', {
                data: [{
                    x: this.state.x,
                    y: this.state.y
                }]
            }, {
                transition: {
                    duration: 0
                },
                frame     : {
                    duration: 0,
                    redraw  : false
                }
            });

            this.frameId = requestAnimationFrame(update);
        };

        this.frameId = requestAnimationFrame(update);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.state.cancelId)
    }


    render() {
        return (
            <div id="animated"/>
        )
    }
}
