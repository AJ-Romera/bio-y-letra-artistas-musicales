import React, { useState } from 'react';

function Formulario() {
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: '',
    });
    const [error, setError] = useState(false);

    const { artista, cancion } = busqueda;

    const actualizarStateBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    // Consultar las APIs
    const buscarBioYLetra = (e) => {
        e.prevent.default();

        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
    };

    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={buscarBioYLetra}
                    >
                        <fieldset>
                            <legend className='text-center'>
                                Buscador Bio de Artistas Musicales y Letras de
                                Canciones
                            </legend>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artista'
                                            placeholder='Nombre Artista'
                                            onChange={actualizarStateBusqueda}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='cancion'
                                            placeholder='Nombre Canción'
                                            onChange={actualizarStateBusqueda}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
