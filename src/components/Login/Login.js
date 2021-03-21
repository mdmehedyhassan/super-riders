import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
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
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSignInSubmit = (e) => {
        console.log(user.email, user.password)
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        e.preventDefault();
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSignInSubmit} className="p-5 rounded-3 bg-light  border border-info d-flex flex-column justify-content-center align-items-center">
                {newUser && <input type="text" className="mb-4" name="name" onBlur={handleBlur} id="" placeholder="Name" />}
                <input className="mb-4" type="text" name="email" onBlur={handleBlur} id="" placeholder="Username or Email" required />
                <input className="mb-4" type="password" name="password" onBlur={handleBlur} id="" placeholder="Password" required />
                {newUser && <input type="password" className="mb-4" name="password" onBlur={handleBlur} id="" placeholder="Confirm Password" />}

                <input className=" mb-5 bg-warning rounded-pill" type="submit" value={newUser ? "Create an account"  : "Login"} />

                <label htmlFor="newUser">{newUser ? "Already have an account? " : "Don't have an account? "} 
                    <input type="submit" onClick={() => setNewUser(!newUser)} name="newUser" value={newUser ? 'Login' : 'Create an account'} id="" /> 
                </label> 
            </form>
            <p className="bg-danger text-warning">{user.error}</p>
            {
                user.success && <p className="bg-success text-light">User {newUser ? "create" : "logged in"} successfully</p>
            }
            <h4>Or</h4>
            <button type="button" className="mb-5 btn btn-danger rounded-pill" onClick={handleGoogleSignIn}><FontAwesomeIcon className="text-success" icon={faGoogle} /> Continue with Google</button>
        </div>
    );
};

export default Login;