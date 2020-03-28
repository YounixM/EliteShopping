import React from 'react';
import '../../assets/styles/sign-in-sign-up.scss';
import Login from '../Login/login.component';
import SignUp from '../SignUp/signup.component';

export default function SignInSignUp  () {
    return (
        <div className='signInSignUp'>
            <Login />
            <SignUp />
        </div>
    )
}
