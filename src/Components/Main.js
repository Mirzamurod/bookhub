import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Features from './Features/Features'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Pricing from './Pricing/Pricing'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <Header />
            <About />
            <Features />
            <Pricing />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default Main
