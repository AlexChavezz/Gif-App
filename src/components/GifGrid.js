import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';


const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs( category );
    
    /*const [images, setImages] = useState([]);
    
    
  
*/

    return (
        <>
            <h3> {category} </h3>
            {loading && <p className = "animate__animated  animate__shakeX">Cargando...</p>}
             <div className = "container">
                {
                    images.map(img => (
                        <GifGridItem {...img} key = { img.id } />
                    ))
                }
            </div>
        </>
    );

}

export default GifGrid;