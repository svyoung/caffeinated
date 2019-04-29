import React, { Component } from 'react';

class Chart extends Component {
    render() {
        return (
            <div id='status'>
                <h1>Status</h1>
                <div className='content'>
                    You have <strong>{this.props.mg}mg</strong> of caffeine left.
                </div>
            </div>
        )
    }
}

export default Chart;