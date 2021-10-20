import React from 'react';
import calculoAlquimista from './calculoAlquimista';
import conversorAlquimista from './conversorAlquimista';

const HorosAlquimista = (props) => {
     
    let numeroAlquimista = calculoAlquimista(props.fecha)
    let horoscopoAlquimista = conversorAlquimista(numeroAlquimista)
    return (
        <div className='horos__box'>
            <div className='horos__box--titles'>
                <h1>Horóscopo Alquimista</h1>
                <h3>{horoscopoAlquimista.nombre}</h3>
            </div>
            <div className="horos__box--info">
                <p>{horoscopoAlquimista.descripcion}</p>    
                <img src={horoscopoAlquimista.img} alt="Icono horóscopo zodíaco" />
                <p>La suma de números día, mes, año es: {numeroAlquimista}</p>
            </div>
        </div>    
    );
};

export default HorosAlquimista;