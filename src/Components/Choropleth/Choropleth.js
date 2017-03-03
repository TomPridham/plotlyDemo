import data from '../../../public/data.js';
const Plotly = require('plotly.js');
import React from 'react';

export class Choropleth extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [{
                type          : 'choropleth',
                locationmode  : 'country names',
                locations     : data.map(datum => {
                    return datum[0];
                }),
                z             : data.map(datum => {
                    return datum[1];
                }),
                text          : data.map(datum => {
                    return datum[0];
                }),
                autocolorscale: true
            }]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        const layout = {
            title: 'Numbers in Some Countries',
            geo  : {
                projection: {
                    type: 'robinson'
                }
            }
        };
        console.log(this.state.data)
        Plotly.plot('choropleth', this.state.data, layout, {showlink: false})
    }

    render() {
        return (
            <div>
                <div id="choropleth"/>
            </div>
        )
    }
}