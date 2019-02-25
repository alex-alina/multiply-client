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
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Email <br></br>
            <input 
              type="email" 
              name="email" 
              value={this.state.email || ''}
              onChange={this.handleChange} 
              placeholder="myemail@hello.com"
            />
          </label>
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;