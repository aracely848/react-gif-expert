import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
 
    return (
        <>
            <h3>{ category }</h3>
            {
                /* FORMA 1
                isLoading
                ? ( <h2>Cargando...</h2> )
                : null*/

                /* FORMA 2 */
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    // images.map(image => (
                    //     <li key={image.id}>{image.title}</li>
                    // ))
                    images.map(( image ) => (
                        <GifItem 
                            key={ image.id }
                            //Trae todos los datos
                            { ...image } 
                        />
                    ))
                }                
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

