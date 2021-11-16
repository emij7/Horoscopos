import React from 'react';
import calculoHindu from './calculoHindu';
import BoxHoroscopo from './BoxHoroscopo';

const HorosHindu = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoHindu(fecha)
    const title = 'Horóscopo Hindú'
    const explanation = 'Por fecha de nacimiento:'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>       
        );
};

export default HorosHindu;