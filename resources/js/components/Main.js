import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Drink from './Drink';
import Chart from './Chart';

/* An example React component */
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drinks: [],
            maxMg: 500,
            maxedOut: false,
            disabled: 0,
            qty: [1, 1, 1, 1, 1, 1],
            warning: false
        };

        this.submitDrink = this.submitDrink.bind(this);
        this.onQty = this.onQty.bind(this);
    }

    componentDidMount() {
        let that = this;
        fetch('/drinks', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {that.setState( { drinks: data });})
    }

    submitDrink(drink) {
        let disabled = 0,
            qty = this.state.qty[drink.id - 1],
            mg = this.state.maxMg - (drink.mg * qty);

        this.state.drinks.map(drink => {
                if(drink.mg > mg) {
                    disabled += 1;
                }
            }
        );
        if(disabled === this.state.drinks.length) {
            this.setState({maxedOut: true});
        }
        if(mg < 0 ) mg = 0;
        this.setState({maxMg: mg, disabled: disabled, selected: drink});
    }

    onQty(e, id) {
        console.log('on change! ' + id);
        if(isNaN(e.target.value)) {
            this.setState({warning:true});
            setTimeout(() => {
                this.setState({
                    warning: false
                });
            }, 2000);
        } else {
            let newQty = this.state.qty;
            newQty[id - 1] = e.target.value;
            this.setState({qty: newQty})
        }
    }

    render() {
        const { drinks } = this.state;
        return (
            <div className='container'>
                <h1><span>Menu</span></h1>
                <div className='menu'>
                    {drinks.map(drink =>
                        <Drink key={drink.id}
                            mg={this.state.maxMg}
                            drinkData={drink}
                            onChange={this.onQty}
                            submitDrink={this.submitDrink}
                            qty={this.state.qty[drink.id - 1]} />
                    )}
                </div>
                <Chart mg={this.state.maxMg}
                    disabled={this.state.disabled}
                    drinks={this.state.drinks} />
                {(this.state.maxedOut) ?
                    (<div className='maxedout-msg'>Sorry, you're all maxed out on your daily limit of caffeine!</div>) : null
                }
                <div className={'warning-nan ' + (this.state.warning ? 'warning' : '')}>Please enter a valid quantity number</div>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}