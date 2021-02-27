import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    // e.preventDefault(); <-- redux-form help us done this
    this.props.createStream(formValues);
    console.log(formValues);
  };
  render() {
    // console.log(this.props); <-- look for redux-form methods in props
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
