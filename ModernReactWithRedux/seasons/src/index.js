import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // we called setState !
      (position) => this.setState({ lat: position.coords.latitude }),

      // we did not !!
      // this.state.lat = position.coords.latitude;
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // React says we hove to define render!
  render() {
    // have error and do not hove latitude
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    // do not have error and hove latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    // don't have error and also don't have latitude
    return <div>Loading ...</div>;

    // course didn't cover the following condition
    // "hove both error and latitude"
    // change first condition to :

    // if (this.state.errorMessage) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    // }

    // might help
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
