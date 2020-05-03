import React, { Component } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handlesSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            required
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            required
            label="Password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
