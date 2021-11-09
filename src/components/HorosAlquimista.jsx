import React from 'react';
import calculoAlquimista from './calculoAlquimista';
import conversorAlquimista from './conversorAlquimista';
import BoxHoroscopo from './BoxHoroscopo';

const HorosAlquimista = (props) => {
    let numeroAlquimista = calculoAlquimista(props.fecha)
    let tuZodiaco = conversorAlquimista(numeroAlquimista)
    let title = 'Horóscopo Alquimista'
    let explanation = `Por cálculo matemático: ${numeroAlquimista}`
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>   
    );
};

export default HorosAlquimista;