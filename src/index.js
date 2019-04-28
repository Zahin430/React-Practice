/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    // Good place to do one-time setup
    // No data loading inside the constructor but it is a bad practice
    // For clarity purposes
    constructor(props) {
        //Used to initialize state
        super(props);


        // This is called at first to do direct assignment or initialize
        // to this state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //Called to update state
                this.setState({
                    lat: position.coords.latitude
                });
            },
            err => {
                this.setState({errorMessage: err.message });
            }
        );
    }

    // Method to do data-loading or initial data loading
    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    // Waits for update and then render
    // Method to do more data loading when state/props change
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered');
    }

    // The state can be used inside of the render function
    // Render method should not contain anythin but jsx
    render() {  
        return (
        <div>Latitude: {this.state.lat}
            <br />
            Error: {this.state.errorMessage}
        </div>

        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);