import React from 'react';

function Cancion({ nombreCancion, letra }) {
    if (letra.length === 0) {
        return null;
    }

    return (
        <>
            <h2>
                Letra de <span className='nombre-cancion'>{nombreCancion}</span>
            </h2>
            <p className='letra'>{letra}</p>
        </>
    );
}

export default Cancion;
