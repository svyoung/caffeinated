import React, { Component } from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { drinks, selectedDrink, inventory} = this.props;
        return (
            <div id='chart'>
                <h1>Chart</h1>
                <div className='inventory'>
                    <ul>
                    {inventory.map(inv =>
                        <li key={inv.id}>{inv.name}</li>
                        )}
                    </ul>
                </div>
                <div className='content'>
                    You have <strong>{this.props.mg}mg</strong> of caffeine left.
                </div>
            </div>
    )
    }
}

export default Chart;