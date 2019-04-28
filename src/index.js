/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
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
    
    // The state can be used inside of the render function
    //Render method should not contain any
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