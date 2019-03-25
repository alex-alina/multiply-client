import React, { PureComponent } from 'react';
import request from 'superagent';
import SignupForm from '../form/SignupForm';

const baseUrl = 'http://localhost:4000';

class SignupFormContainer extends PureComponent {

  handleSubmit = (email) => {
    request
      .post(`${baseUrl}/contacts`)
      .send(email)
      .catch(err => {
        if (err.status === 400) {
          console.error(err);
        }
        else {
          console.error(err);
        }
      });
  }

  render() {
    return (
      <div>
        <SignupForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SignupFormContainer;