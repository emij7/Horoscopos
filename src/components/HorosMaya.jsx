import React from 'react';
import calculoMaya from './calculoMaya';
import BoxHoroscopo from './BoxHoroscopo';

const HorosMaya = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoMaya(fecha)
    const title = 'Horóscopo Maya'
    const explanation = 'Por fecha de nacimiento:'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosMaya;