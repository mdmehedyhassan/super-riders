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
    return (
        <div>
            <h1>this is login</h1>
            <button onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;