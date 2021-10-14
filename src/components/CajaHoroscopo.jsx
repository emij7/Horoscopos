import React from 'react';

const CajaHoroscopo = ({children}) => {
    return (
        <div className='horos__box'>
            <p>Holis</p>
            {children}
        </div>
    );
};

export default CajaHoroscopo;