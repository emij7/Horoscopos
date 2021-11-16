import React from 'react';
import calculoGitano from './calculoGitano';
import BoxHoroscopo from './BoxHoroscopo';

const HorosGitano = (props) => {
    const fecha = parseInt(props.fecha)    
    const tuZodiaco = calculoGitano(fecha)
    const title = 'Horóscopo Gitano'
    const explanation = 'Por fecha de nacimiento:'
    return (
        <BoxHoroscopo titulo={title} signo={tuZodiaco} explicacion={explanation}/>
    );
};

export default HorosGitano;