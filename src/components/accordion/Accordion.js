import React, {useState, createContext, useContext} from 'react'
import "./Accordion.css"
import faqData from "../../fixtures/faqs"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom"


function Accordion(children, ...restProps) {
    // const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <section className="accordion">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion__container">
        
                {faqData.map((item) => (
                    <AccordionItem key={item.id} {...restProps} body={item.body} header={item.header}>{children}</AccordionItem>
                ))}
                <p className="form__p">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="jumbotron__form" style={{width: "700px", margin: "auto"}}>
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
        </section>
    )
}

        const AccordionItem = ({header, body}) => {
            const [ toggleShow, setToggleShow ] = useState(false);
            
            return (
            <div className="accordion__item">
                <div className="accordion__item--headerContainer" onClick={() => setToggleShow(!toggleShow)}>
                <div className="accoridon__item--header">{header}</div>
                {toggleShow? (
                    <img src="/images/icons/close-slim.png" alt="Close" />
                ): <img src="/images/icons/add.png" alt="Open" />}
                </div>
                <div className={toggleShow ? "accordion__item--body open" : "accordion__item--body"}><p>{body}</p>
                    </div>
            </div>

            )
        }


export default Accordion
