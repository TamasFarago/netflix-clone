import React from 'react'
import "./Grid.css"
import jumboData from "../../fixtures/jumbo"

function Grid() {
    return (
        <section className="grid">
            {jumboData.map((item) => (
                <>
                <div className="grid__container" style={{flexDirection: `${item.direction}`}}>
                    <div className="grid__container--text">
                        <h2>{item.title}</h2>
                        <p>{item.subTitle}</p>
                    </div>
                    <div className="grid__container--img">
                       <img src={item.image} alt="" /> 
                    </div>
                </div>
                 <hr />
                 </>
            ))}
        </section>
    )
}

export default Grid
