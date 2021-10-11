import React from 'react';
import calculoGitano from './calculoGitano';

const HorosGitano = (props) => {
    const fecha = parseInt(props.fecha)    
    const horoscopoGitano = calculoGitano(fecha)
    return (
        <div>
            <p>Horóscopo Gitano: {horoscopoGitano}</p>
        </div>
    );
};

export default HorosGitano;