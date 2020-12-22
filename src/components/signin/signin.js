import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase';

import './signin.style.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name] : value }); 
    } 

    render() {
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        label="email"
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name="password"
                        label="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;