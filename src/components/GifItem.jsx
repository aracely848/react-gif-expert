import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
/* TAREA
1. Añadir PropTypes como usamos vite debemos => npm install prop-types
a. title y url obligatorio
2. Evaluar el snapshot
*/
