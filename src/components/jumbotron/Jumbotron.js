import React from 'react'
import "./Jumbotron.css"
import logo from "../../logo.svg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom"

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="jumbotron__header">
                <img className="jumbotron__header-img" src={logo} alt="" />
                <Link to="/signin">
                    Sign in
                </Link>
            </div>
            <div className="jumbotron__content">
                <div className="jumbotron__content--inner">
                <h1>Unlimited movies, TV <br />shows, and more.</h1>
                <h5>Watch anywhere. Cancel anytime.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="jumbotron__form">
                    <input 
                    type="text" 
                    required
                    />
                    <span className="floating-label">Email Address</span>
                    <Link to="/signup">
                    <div className="jumbotron__form--button">
                    <p>Get Started <ArrowForwardIosIcon fontSize="small"/></p>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
