import React, { PureComponent } from 'react';
import './SignupForm.css';
import FormValidationMessage from './FormValidationMessage';
const regExPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class SignupForm extends PureComponent {
  state = {
    confirmRegistration: false,
    disableSubmit: true,
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      confirmRegistration: false,
      [name]: value,
    });
    this.validateEmail();
  }
  
  handleOnFocus = (event) => {
    this.setState({
      confirmRegistration: false,
    });
  }

  handleOnBlur = (event) => {
    this.setState({
      confirmRegistration: false,
      invalidEmail: false,
      email: ""
    });
  }

  validateEmail = () => {
    if (regExPattern.test(this.state.email) && this.state.email !== "") {
      this.setState({
        invalidEmail: false,
        disableSubmit: false,
      });
    } else {
      this.setState({
        invalidEmail: true,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: "",
      confirmRegistration: true,
      disableSubmit: true,
    });
  }

  render() {
    return (
      <div className="signup-form">
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <label>
            Signup to get the latest updates <br></br>
            <input
              className="form.control"
              type="text"
              name="email"
              value={this.state.email || ''}
              onChange={this.handleChange}
              onFocus={this.handleOnFocus}
              onBlur={this.handleOnBlur}
              placeholder="email@hello.com"
              autoComplete="off"
            />
          </label>
          { this.state.invalidEmail ? <FormValidationMessage color="#F26627" message="Please fill in a valid email" /> : null}
          { this.state.confirmRegistration ? <FormValidationMessage color="#9CD7D1" message="Email registration successful." /> : null}
          <input className="submit-btn" type="submit" value="Submit" disabled={this.state.disableSubmit}/>
        </form>
      </div>
    );
  }
}

export default SignupForm;