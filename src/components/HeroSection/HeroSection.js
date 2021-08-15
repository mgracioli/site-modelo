import React from 'react'
import '../../App.css'
import { Button } from '../Button/Button'
import './HeroSection.css'

function HeroSection(props) {
    return (
        <div className='hero-container'>
            {/*<video src='' autoPlay loop muted></video>*/} {/* caso queira colocar um video de fundo ao inves da imagem é só colocar a source */}
            <h1>{props.mainText}</h1>
            <p>{props.description}</p>

            <div className='hero-btns '>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>{props.textBtn1}</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>{props.textBtn2} <i className={props.iconBtn2} /></Button>
            </div>
        </div>
    )
}

export default HeroSection
