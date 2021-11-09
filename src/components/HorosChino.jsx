import React from 'react';
import calculoChino from './calculoChino';
import BoxHoroscopo from './BoxHoroscopo';

const HorosChino = (props) => {
    let tuZodiaco = calculoChino(props.fecha)
    let title= 'Horóscopo Chino'
    let explanation = `Por año de nacimiento: ${props.fecha}`
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosChino;