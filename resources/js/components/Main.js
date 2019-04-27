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
            qty: '',
            percentage: 100,
            disabled: 0
        };

        this.submitDrink = this.submitDrink.bind(this);
        this.qtyChange = this.qtyChange.bind(this);
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
        let disabled = 0, mg = this.state.maxMg - drink.mg;
        this.state.drinks.map(drink => {
                if(drink.mg > mg) {
                    disabled += 1;
                }
            }
        );
        this.setState({maxMg: mg, disabled: disabled, selected: drink});
    }

    qtyChange(e) {
        this.setState({ qty: e.target.value});
        console.log('changing!' + this.state.qty);
    }

    render() {
        const { drinks } = this.state;
        return (
            <div className='container'>
                <h1><span>Menu</span></h1>
                <div className='menu'>
                    {drinks.map(drink =>
                        <Drink key={drink.id} mg={this.state.maxMg} drinkData={drink} submitDrink={this.submitDrink} onChange={this.onChange} />
                    )}
                </div>

                <Chart mg={this.state.maxMg} disabled={this.state.disabled} drinks={this.state.drinks} selectedDrink={this.state.selected} />
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