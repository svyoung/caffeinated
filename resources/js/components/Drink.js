import React, { Component } from 'react';

class Drink extends Component {
    render() {
        const { drinkData } = this.props;
        return (
            <article className={'drink ' + (this.props.mg < drinkData.mg ? 'disabled' : '' )} data-mg={drinkData.mg} data-alias={drinkData.alias} disabled={drinkData.disabled}>
                <div className={'drink-image ' + drinkData.alias}></div>
                <h2>{drinkData.name}</h2>
                <h3>{drinkData.mg}mg</h3>
                <div className='qty'><label>Qty: </label> <input type='text' pattern='[1-9]*' data-alias={drinkData.alias} value={this.props.qty} onChange={(e) => this.props.onChange(e, drinkData.id)} /></div>
                <button type='button' onClick={this.props.submitDrink.bind(this, drinkData)} disabled={(this.props.mg < drinkData.mg ? true : false )}>Select Drink</button>
            </article>
        )
    }
}

export default Drink;