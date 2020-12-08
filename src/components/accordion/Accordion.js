import React from 'react'
import "./Accordion.css"
import faqData from "../../fixtures/faqs.json"

function Accordion() {
    return (
        <section className="accordion">
            <div className="accordion__container">
                <h1>Frequently Asked Questions</h1>
                {}
            </div>
        </section>
    )
}

export default Accordion
