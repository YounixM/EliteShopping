import React, { Component } from "react";

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import "../../assets/styles/login.scss";
import FormInput from "../Base/FormInput/form-input.component";
import Button from "../Base/Button/button.component";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
};

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      
      this.setState({
        email: '',
        password: ''
      });
    } catch (err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div className="login">
        <h2> I already have an account </h2>
        <span> Sign in with your email and password  </span>

        <form className="loginForm" onSubmit={this.handleSubmit}>
          <FormInput name="email" label='Email' type="email" handleChange={this.handleChange} value={this.state.email} required />
          <FormInput name="password" label='Password' type="password" handleChange={this.handleChange} value={this.state.password}  required />

          <div className="actionButtons">
            <Button type="submit"> Login </Button>
            <Button onClick={signInWithGoogle} customStyles='google-sign-in'> Sign in with Google </Button>
          </div>
          
          <p className='reset-password'> Forgot Password ? Reset </p>
        </form>
      </div>
    );
  }
}
