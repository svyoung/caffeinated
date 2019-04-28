import React, { Component } from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { inventory} = this.props;
        return (
            <div id='chart'>
                <h1>Chart</h1>
                <div className='content'>
                    You have <strong>{this.props.mg}mg</strong> of caffeine left.
                </div>
            </div>
    )
    }
}

export default Chart;