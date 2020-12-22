import React from 'react';

import SignIn from '../signin/signin';
import SignUp from '../signup/signup';

import './signinandsignup.style.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
) 

export default SignInAndSignUp;