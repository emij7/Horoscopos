import React from 'react';
import calculoChino from './calculoChino';


const HorosChino = (props) => {
    let horoscopoChino = calculoChino(props.fecha)
    return (
        <div className='horos__box'>
            <div className='horos__box--titles'>
                <h1>Horóscopo chino </h1>
                <h3>{horoscopoChino.nombre}</h3>
            </div>
            <div className="horos__box--info">
                <p>{horoscopoChino.descripcion} </p>    
                <img src={horoscopoChino.img} alt="Icono horóscopo zodíaco" />
                <p>{horoscopoChino.fecha}: {props.fecha}</p>
            </div>
        </div> 
    );
};

export default HorosChino;