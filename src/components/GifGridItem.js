import React, { useContext } from 'react';
import star from '../pictures/star_black_24dp.svg';
import { ItemsContext } from './Context/ItemsContext';

export const GifGridItem = ({ title, id, url, isFavorite }) => {

    const { items, setItems } = useContext(ItemsContext);

    const handleAddFavorite = () => {
        if (items.length > 0) {
            setItems([...items, {
                title,
                url,
                id,
                isFavorite: true,
            }])
        } else {
            setItems([{
                title,
                url,
                id,
                isFavorite: true
            }])
        }
    }

    const handleRemoveFromFavorites = () => {
        setItems( items.filter(item => item.id !== id) )
    }

    return (
        <div className='card' >
            <img
                src={url}
                alt={title}
                className="gif"
            />
            <p>{title}</p>
            {
                !isFavorite ?
                    <button
                        onClick={handleAddFavorite}
                    >
                        <img
                            src={star}
                            alt="star-img"
                            id="star-img"
                        />
                        ADD TO FAVORITES
                    </button>
                    :
                    <button
                    onClick={ handleRemoveFromFavorites }
                >
                    <img
                        src={star}
                        alt="star-img"
                        id="star-img"
                    />
                    REMOVE FROM FAVORITES
                </button>
                }
        </div>
    );
}
