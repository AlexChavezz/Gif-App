import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


const GifGrid = ({ category, setAlertLogin }) => {


    const { data: images } = useFetchGifs(category);

    return (
        <section>
            <article className="gif-title">
                <h3> {category} </h3>
            </article>
            <article className="gif-card-container">
                {
                    images.map(img => (
                        <GifGridItem key={img.id} {...img} isFavorite={false} setAlertLogin={setAlertLogin}/>
                    ))
                }
            </article>
            {/* Looading animation */}
            {/* {loading && <p className = "animate__animated  animate__shakeX">Cargando...</p>} */}
        </section>
    );

}

export default GifGrid;