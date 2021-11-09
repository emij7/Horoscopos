import React from 'react';
import calculoCelta from './calculoCelta';
import BoxHoroscopo from './BoxHoroscopo';

const HorosCelta = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoCelta(fecha)
    const title = 'Horóscopo Celta'
    const explanation = 'Por fecha de nacimiento'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosCelta;