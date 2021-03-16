import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';
import Info from './componentes/Info';

function App() {
    const [busquedaLetra, setBusquedaLetra] = useState({});
    const [nombreCancion, setNombreCancion] = useState('');
    const [letra, setLetra] = useState('');
    const [info, setInfo] = useState({});

    useEffect(() => {
        if (Object.keys(busquedaLetra).length === 0) return;

        const consultarApiLetra = async () => {
            const { artista, cancion } = busquedaLetra;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

            const [letra, informacion] = await axios.all([
                axios.get(url),
                axios.get(url2),
            ]);

            setNombreCancion(cancion);
            setLetra(letra.data.lyrics);
            setInfo(informacion.data.artists[0]);
        };
        consultarApiLetra();
    }, [busquedaLetra]);

    return (
        <>
            <Formulario setBusquedaLetra={setBusquedaLetra} />

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Info info={info} />
                    </div>
                    <div className='col-md-6'>
                        <Cancion nombreCancion={nombreCancion} letra={letra} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
