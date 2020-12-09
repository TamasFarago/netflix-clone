import React from 'react'
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import Accordion from "../components/accordion/Accordion"
import Footer from "../components/footer/Footer"

function home() {
    return (
        <>
        <Jumbotron />
        <Grid />
        <Accordion />
        <Footer />
        </>
    )
}

export default home
