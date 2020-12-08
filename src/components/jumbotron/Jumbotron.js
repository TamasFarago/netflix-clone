import React from 'react'
import "./Jumbotron.css"
import logo from "../../logo.svg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="jumbotron__header">
                <img className="jumbotron__header-img" src={logo} alt="" />
                <a href="#">Sign In</a>
            </div>
            <div className="jumbotron__content">
                <div className="jumbotron__content--inner">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h5>Watch anywhere. Cancel anytime.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="jumbotron__form">
                    <input 
                    type="text" 
                    required
                    />
                    <span className="floating-label">Email Address</span>
                    <div className="jumbotron__form--button">
                    <a href="#">Get Started <ArrowForwardIosIcon fontSize="small"/></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
