import React, { useState } from 'react';

function Formulario({ setBusquedaLetra }) {
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
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Si realiza exitosamente la consulta, me la llevo al componente principal
        setBusquedaLetra(busqueda);
    };

    return (
        <div className='bg-info'>
            {error ? (
                <p className='alert alert-danger text-center p-2'>
                    Todos los campos son obligatorios
                </p>
            ) : null}
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={buscarBioYLetra}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
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
