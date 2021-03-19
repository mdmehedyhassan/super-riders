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
     }else {
        firebase.app(); 
     }
    
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser ={name: displayName, email};
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    const handleSignInSubmit = () => {

    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSignInSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <input type="text" name="name" onChange={handleChange} id="" placeholder="Name" required/>
            <input type="text" name="email" onChange={handleChange} id="" placeholder="Username or Email" required/>
            <input type="password" name="password" onChange={handleChange} id="" placeholder="Password" required/>
            <input type="password" name="confirmPassword" onChange={handleChange} id="" placeholder="Confirm Password" required/>
            <input type="submit" value="Submit"/>
            </form>
            <br/>
            <button type="button" className="btn btn-outline-warning" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;