import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';

function App() {
    const [busquedaLetra, setBusquedaLetra] = useState({});
    const [letra, setLetra] = useState('');
    const [nombreCancion, setNombreCancion] = useState('');

    useEffect(() => {
        if (Object.keys(busquedaLetra).length === 0) return;

        const consultarApiLetra = async () => {
            const { artista, cancion } = busquedaLetra;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

            const resultado = await axios.get(url);

            setNombreCancion(cancion);
            setLetra(resultado.data.lyrics);
        };
        consultarApiLetra();
    }, [busquedaLetra]);

    return (
        <>
            <Formulario setBusquedaLetra={setBusquedaLetra} />

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <Cancion nombreCancion={nombreCancion} letra={letra} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
