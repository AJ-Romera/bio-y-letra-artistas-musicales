import React from 'react';
import PropTypes from 'prop-types';

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
                <p className='card-text'>
                    <b>Género: </b>
                    {strGenre}
                </p>
                <p className='card-text'>
                    <b>Ciudad/País: </b>
                    {strCountry}
                </p>
                <p className='card-text'>
                    <b>Marca/Empresa: </b>
                    {strLabel}
                </p>
                <p className='card-text'>
                    <b>Empezó en: </b>
                    {intFormedYear}
                </p>
                <p className='card-text'>
                    <b>En activo: </b>
                    {strDisbanded === 'Yes'
                        ? 'No'
                        : strDisbanded === 'No' ||
                          strDisbanded === '' ||
                          strDisbanded === null
                        ? 'Si'
                        : 'No disponemos de dicha información en estos momentos'}
                </p>
                <h2 className='card-text'>Biografía:</h2>
                <p className='card-text'>
                    {strBiographyES
                        ? strBiographyES
                        : strBiographyEN
                        ? strBiographyEN
                        : 'No hay biografía disponible en español ni inglés'}
                </p>
                <p className='card-text'>
                    {strWebsite ? (
                        <a
                            href={`https://${strWebsite}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fas fa-link'></i>
                        </a>
                    ) : null}
                    {strFacebook ? (
                        <a
                            href={`https://${strFacebook}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-facebook'></i>
                        </a>
                    ) : null}
                    {strTwitter ? (
                        <a
                            href={`https://${strTwitter}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                    ) : null}
                    {strLastFMChart ? (
                        <a
                            href={`${strLastFMChart}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-lastfm'></i>
                        </a>
                    ) : null}
                </p>
            </div>
        </div>
    );
}

Info.propTypes = {
    info: PropTypes.object.isRequired,
};

export default Info;
