import React from 'react';

const BoxHoroscopo = (props) => {
    return (
        <div className='horos__box'>
            <div className='horos__box--titles'>
                <h1>{props.titulo}</h1>
                <h3>{props.signo.nombre}</h3>
            </div>
            <div className="horos__box--info">
                <p>{props.signo.descripcion}</p>    
                <img src={props.signo.img} alt="Icono horóscopo" />
                <p>{props.explicacion} {props.signo.fecha}</p>
            </div>
        </div>  
    );
};

export default BoxHoroscopo;