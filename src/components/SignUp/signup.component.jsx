import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "../../assets/styles/signup.scss";
import FormInput from "../Base/FormInput/form-input.component";
import Button from "../Base/Button/button.component";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = (event) => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email,password);

        createUserProfileDocument(user, { displayName });

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    } catch(err) {
        console.log('create new user error', err);
    }
  };

  render() {
    return (
        <div className="signUp">
            <h2> I do not have an account </h2>
            <span> Sign up with your email and password  </span>

            <form className="signUpForm" onSubmit={this.handleSubmit}>
                <FormInput name="displayName" label='Name' type="text" handleChange={this.handleChange} value={this.state.displayName} required />
                <FormInput name="email" label='Email' type="email" handleChange={this.handleChange} value={this.state.email} required />
                <FormInput name="password" label='Password' type="password" handleChange={this.handleChange} value={this.state.password}  required />
                <FormInput name="confirmPassword" label='Confirm Password' type="password" handleChange={this.handleChange} value={this.state.confirmPassword}  required />

                <div className="actionButtons">
                    <Button type="submit"> Sign Up </Button>
                </div>
            </form>
        </div>
    );
  }
}
