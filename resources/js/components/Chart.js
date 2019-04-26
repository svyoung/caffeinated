import React, { Component } from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='chart'>
                    MG: {this.props.mg}
            </div>
    )
    }
}

export default Chart;