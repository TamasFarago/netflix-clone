import React, {useState, useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import "./SignIn.css"
import logo from "../../logo.svg"
import {Link} from "react-router-dom"
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from "../../constants/routes"
import Footer from "../footer/Footer"

function SignIn() {
    const history = useHistory()
    const [learnMore, setLearnMore] = useState(false);
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const isInvalid = password === "" || emailAddress === "";

    const { firebase } = useContext(FirebaseContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        // firebase
        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress("");
                setPassword("");
                setError(error.message)
            })
    }
    return (
        <>
        <div className="sign_in">
            <div className="sign_in__header">
                <Link to="/">
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="sign_in__form">
                    {error? <div className="sign_in_error">
            <               p>{error}</p>
                    </div> : null}
                <h1>Sign In</h1>
                <form method="POST" onSubmit={handleSignIn}>
                    <label>
                        <input 
                            type="text"  
                            className="egy"
                            required
                            id="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)} />
                        <label for="email" className="ketto">Email Address</label>
                    </label>
                    <label>
                        <input 
                            type="password"  
                            className="egy"
                            required 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <label for="password" className="ketto">Password</label>
                    </label>
                    <button disabled={isInvalid} type="submit">Sign In</button>
                    <div className="sign_in__form--checkbox">
                        <input type="checkbox"/>
                        <span>Remember me</span>
                    </div>
                </form>

                <div className="facebook__login">
                    <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" className="facebook_icon" alt="fb-icon" />
                    <span>Login with Facebook</span>
                </div>
                
                <p>New to Netflix? <Link to="/signup">Sign up now</Link>.</p>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!learnMore? <span className="learn_more" onClick={() => setLearnMore(true)}>Learn more.</span> : null}</span>
                <div className={learnMore? "learn_more_text learn_more_open" : "learn_more_text"}><p>The information collected by Google reCAPTCHA is subject to the Google <span>Privacy Policy</span> and <span>Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p></div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default SignIn
