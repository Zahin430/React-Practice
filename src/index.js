/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        //Used to initialize state
        super(props);

        this.state = { lat: null };
    }
    
    // The state can be used inside of the render function
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
    
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);