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
            selected: ''
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
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                that.setState( { drinks: data });
            })
    }

    submitDrink(drink) {
        let mg = this.state.maxMg, that = this, newMG = mg - drink.mg;
        console.log('mg: ' + this.state.maxMg);
        this.setState({
            maxMg: (that.state.maxMg - drink.mg)
        });

        console.log('selected: ' + drink.mg);
        console.log('mgs left: ' + this.state.maxMg);

    }

    render() {
        const { drinks } = this.state;
        return (
            <div className='container'>
                <h3>All Products</h3>
        {drinks.map(drink =>
            <Drink key={drink.id} mg={this.state.maxMg} drinkData={drink} submitDrink={this.submitDrink} />
        )}
            <Chart mg={this.state.maxMg} />
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