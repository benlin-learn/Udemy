import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  // renderInput(formProps){}
  renderInput = ({ input, label, meta }) => {
    // console.log(formProps);
    // return <input {...formProps.input} />;

    // use meta check meta methods ex:.error (validate message)
    // console.log(meta);

    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {/* {console.log(this)} */}
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // e.preventDefault(); <-- redux-form help us done this
    this.props.onSubmit(formValues);
    // console.log(formValues);
  };
  render() {
    // console.log(this.props); <-- look for redux-form methods in props
    return (
      <div>
        {/* handleSubmit provided by redux-form*/}
        <form
          // after handleSubmit process the form event and our callback (this.onSubmit) then get invoked
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='title'
            component={this.renderInput}
            label='Enter Title'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter Description'
          />
          <button className='ui button primary'>Submit</button>
        </form>
      </div>
    );
  }
}

// for redux-form to validate the data
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamForm', validate: validate })(
  StreamForm
);
