import React, { Component } from 'react';

class Drink extends Component {
    render() {
        const { drinkData } = this.props;
        return (
            <article className={'drink ' + (this.props.mg < drinkData.mg ? 'disabled' : '' )} data-mg={drinkData.mg} data-alias={drinkData.alias} disabled={drinkData.disabled}>
                {drinkData.name}
                <button type='button' onClick={() => this.props.submitDrink(drinkData)} disabled={(this.props.mg < drinkData.mg ? true : false )}>Select Drink</button>
            </article>
        )
    }
}

export default Drink;