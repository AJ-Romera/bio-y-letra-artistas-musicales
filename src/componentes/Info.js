import React from 'react';

function Info({ info }) {
    if (Object.keys(info).length === 0) {
        return null;
    }

    const {
        strArtist,
        strArtistAlternate,
        strArtistThumb,
        strGenre,
        intFormedYear,
        strLabel,
        strCountry,
        strDisbanded,
        strBiographyES,
        strBiographyEN,
        strWebsite,
        strFacebook,
        strTwitter,
        strLastFMChart,
    } = info;

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información de{' '}
                {strArtistAlternate
                    ? strArtist + ' (' + strArtistAlternate + ')'
                    : strArtist}
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt='Imagen del Artista' />
                <p className='card-text'>Género: {strGenre}</p>
                <h2 className='card-text'>Biografía:</h2>
                <p className='card-text'>
                    {strBiographyES
                        ? strBiographyES
                        : strBiographyEN
                        ? strBiographyEN
                        : 'No hay biografía disponible en español ni inglés'}
                </p>
                <p className='card-text'>
                    <a
                        href={`https://${strWebsite}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fas fa-link'></i>
                    </a>
                    <a
                        href={`https://${strFacebook}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a
                        href={`https://${strTwitter}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a
                        href={`${strLastFMChart}`}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-lastfm'></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Info;
