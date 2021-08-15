import React from 'react'
import '../../App.css'
import './Home.css'
import CardsHome from './CardsHome'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'

function Home() {

    //document.documentElement.style.setProperty('--img-fundo', 'url("../../images/home-capa.jpg")')

    return(
        <>
            <HeroSection 
                /*img = '../../images/home-capa.jpg'*/
                mainText='THE BEST MEALS YOU WILL EVER HAVE'
                description='What are you waiting for?'
                textBtn1='GET STARTED'
                textBtn2='WATCH TRAILLER'
                iconBtn2='far fa-play-circle'
                />
            <CardsHome />
            <Footer />
        </>
    )
}

export default Home;