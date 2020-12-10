import React from 'react'
import "./Slides.css"
import Carousel from "react-elastic-carousel"

function Slides({slideRows, category}) {

    const breakPoints = [
       
        {width: 300, itemsToShow: 2},
        {width: 568, itemsToShow: 3},
        {width: 700, itemsToShow: 4},
        {width: 1100, itemsToShow: 5}
    ]
    

console.log("hi", slideRows)
    return (
        <div className="slides">
           {slideRows.map((slideItem) => {
               return (
                   <div>
                       <h1>{slideItem.title}</h1>
                       
                       <div className="slide__row">
                       <Carousel breakPoints={breakPoints}>
                       {slideItem.data.map((item, index) => (
                                 <img number={index+1} src={`images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                           ))}
                            </Carousel>
                       </div>
                      
                   </div>
                    
               )
})}
        </div>
    )
}

export default Slides
