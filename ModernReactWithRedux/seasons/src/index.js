import React from 'react';
import ReactDOM from 'react-dom';

// CORS error icon not loading
import 'semantic-ui-css/semantic.min.css';

import SeasonDisplay from './SeasonDisplay';

import Spinner from './Spinner';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment to this.state
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  // totally the same as constructor one
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // we called setState !
      (position) => this.setState({ lat: position.coords.latitude }),

      // we did not !!
      // this.state.lat = position.coords.latitude;
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    // have error and do not hove latitude
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    // do not have error and hove latitude
    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // don't have error and also don't have latitude
    return <Spinner message='Please accept location request ...' />;

    // course didn't cover the following condition
    // "hove both error and latitude"
    // change first condition to :

    // if (this.state.errorMessage) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    // }

    // might help
  }

  // React says we hove to define render!
  render() {
    // 如果要在所有內容都能在顯示時有紅色邊框，可以把內容都提取出來，一起加然後再呼叫，就不用一個一個單獨處理 (p.s. className ="border red" 只是示範，沒有該 css 設定)

    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
