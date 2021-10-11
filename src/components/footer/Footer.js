import React from 'react'
import "./Footer.css"

function Footer({style}) {
    return (
        <footer style={style}>
            <p><a href="#">Questions? Contact us.</a></p>
            <div className="footer__grid">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways to Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Cards</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
