# Web Biografía y Letra de Artistas Musicales con React

_Web que te da información de artistas musicales y la letra que escojas mediante una consulta con axios a dos apis simultáneamente. Solo tienes que rellenar un pequeó formulario con el artista o grupo y la canción de ese artista/s de los cuales busques información._

## Índice de Contenidos

-   [Demo](#demo-)
-   [Construido Con](#construido-con-%EF%B8%8F)
-   [Instalación](#instalación-)

## Demo 🚀

https://bio-y-letra-artistas-musicales.netlify.app/

## Construido con 🛠️

-   [Create React App](https://github.com/facebook/create-react-app). - Usado para crear la base del proyecto con React
-   [API Lyrics.ovh](https://lyricsovh.docs.apiary.io/#) - API de donde tomo los datos de las letras de canciones
-   [API TheAudioDB](https://www.theaudiodb.com/api_guide.php) - API de donde tomo la información de los artistas (nombre, género musical, empresa, etc)
-   [Bootswatch](https://bootswatch.com/4/journal/bootstrap.min.css) - Un theme para Bootstrap. Se encarga del aspecto y responsive de la web.
-   [FontAwesome Icons](https://fontawesome.com/icons?d=gallery&p=2) - Tomo 4 iconos para mostrar las redes sociales del artista o artistas.
-   React useState Hook - Para el estado de búsqueda de la letra o info del artista, nombre de la canción, error, búsqueda del formulario...
-   React useEffect Hook - Para consultar las dos API en simultáneo cada vez que cambie el state de busquedaLetra
-   Axios - Librería de JavaScript que uso como cliente HTTP para consultar las API y obtener respuestas sencillas
-   JavaScript ES6+ - Últimos estándares de JavaScript
-   Carga condicional de componentes
-   PropTypes - Verificación de los tipos de las props.

### Instalación 🔧

_Clona o haz fork del repositorio. Abre el proyecto en tu consola y escribe el comando:_

```
npm install
```

_Te instalará las dependencias del proyecto, luego usa el comando:_

```
npm start
```

_Iniciará el proyecto en modo desarrollador en tu navegador. Se abrirá automáticamente:_

[http://localhost:3000](http://localhost:3000)

_La página se recargará si haces y guardas cambios en el código. También verás errores en la consola (si los hubiese)_
