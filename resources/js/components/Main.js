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
            selected: '',
            percentage: 100,
            maxedOut: false,
            disabled: 0,
            inventory: []
        };

        this.submitDrink = this.submitDrink.bind(this);
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
            .then(data => {that.setState( { drinks: data });}
            )
    }

    submitDrink(drink) {
        let disabled = 0, mg = this.state.maxMg - drink.mg, inv = this.state.inventory.concat(drink);
        this.state.drinks.map(drink => {
                if(drink.mg > mg) {
                    disabled += 1;
                }
            }
        );
        if(disabled === this.state.drinks.length) {
            this.setState({maxedOut: true});
        }
        this.setState({maxMg: mg, disabled: disabled, selected: drink, inventory: inv});

        this.setState({
            inventory: inv
        })
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
                            submitDrink={this.submitDrink} />
                    )}
                </div>
                <Chart mg={this.state.maxMg}
                    disabled={this.state.disabled}
                    inventory={this.state.inventory}
                    drinks={this.state.drinks}
                    selectedDrink={this.state.selected} />
                {(this.state.maxedOut) ?
                    (<div className='maxedout-msg'>Sorry, you're all maxed out on your daily limit of caffeine!</div>) : null
                }
            </div>
    );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}