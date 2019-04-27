import React, { Component } from 'react';

class Chart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { drinks, selectedDrink} = this.props;
        return (
            <div id='chart'>
                <h1>Chart</h1>
                <div className='content'>
                    <div className='cart'>
                        {selectedDrink.name}
                        {drinks.map(drink => {
                            this.props.selectedDrink.name
                                // {if(drink.id === selectedDrink.id) {
                                //     selectedDrink.name
                                // }}
                        })}
                    </div>
                    You have <strong>{this.props.mg}mg</strong> of caffeine left. <br />
                    Number of disabled drinks: {this.props.disabled}
                </div>
            </div>
    )
    }
}

export default Chart;