import React, {useState, createContext, useContext} from 'react'
import "./Accordion.css"
import faqData from "../../fixtures/faqs"


function Accordion(children, ...restProps) {
    // const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <section className="accordion">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion__container">
        
                {faqData.map((item) => (
                    <AccordionItem key={item.id} {...restProps} body={item.body} header={item.header}>{children}</AccordionItem>
                ))}
            </div>
        </section>
    )
}

        const AccordionItem = ({header, body}) => {
            const [ toggleShow, setToggleShow ] = useState(false);
            
            return (
            <div className="accordion__item">
                <div className="accoridon__item--header" onClick={() => setToggleShow(!toggleShow)}>{header}</div>
                <div className={toggleShow ? "accordion__item--body open" : "accordion__item--body"}><p>{body}</p>
                    </div>
            </div>

            )
        }


export default Accordion
