import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordNumber;
        }
        
    }
    const handleSignInSubmit = () => {

    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSignInSubmit} className="d-flex flex-column justify-content-center align-items-center">
                <input type="text" name="name" onBlur={handleBlur} id="" placeholder="Name" required />
                <input type="text" name="email" onBlur={handleBlur} id="" placeholder="Username or Email" required />
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Password" required />
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Confirm Password" required />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <button type="button" className="btn btn-outline-warning" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;