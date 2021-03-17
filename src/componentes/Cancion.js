import React from 'react';
import PropTypes from 'prop-types';

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

Cancion.propTypes = {
    nombreCancion: PropTypes.string.isRequired,
    letra: PropTypes.string.isRequired,
};

export default Cancion;
