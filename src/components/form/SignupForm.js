import React, { PureComponent } from 'react';
import './SignupForm.css';

class SignupForm extends PureComponent {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: ""
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
            <span className="invalid-feedback">
              <p className="error-message">Enter a valid email address</p>
            </span>
          </label>
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;