import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import axios from 'axios';

function App() {
    const [busquedaLetra, setBusquedaLetra] = useState({});
    const [letra, setLetra] = useState('');

    useEffect(() => {
        if (Object.keys(busquedaLetra).length === 0) return;

        const consultarApiLetra = async () => {
            const { artista, cancion } = busquedaLetra;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

            const resultado = await axios.get(url);

            setLetra(resultado.data.lyrics);
        };
        consultarApiLetra();
    }, [busquedaLetra]);

    return <Formulario setBusquedaLetra={setBusquedaLetra} />;
}

export default App;
