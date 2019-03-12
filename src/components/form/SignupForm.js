import React, { PureComponent } from 'react';
import './SignupForm.css';
import FormValidation from './FormValidation';
// import { validate } from 'validate.js';

// const constraints = {
//   from: {
//     email: {
//       message: "Please enter a valid email"
//     }
//   }
// };

class SignupForm extends PureComponent {
  state = {
    confirmRegistration: false,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: "",
      confirmRegistration: true,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  // validate email input
  // validate({from: email}, constraints);

  render() {
    return (
      <div className="signup-form">
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <label>
            Signup to get the latests updates <br></br>
            <input
              className="form.control"
              type="email"
              name="email"
              value={this.state.email || ''}
              onChange={this.handleChange}
              placeholder="email@hello.com"
              minlength="6"
              maxlength="100"
              pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
            />
          </label>
          {this.state.confirmRegistration ? <FormValidation /> : null}
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;