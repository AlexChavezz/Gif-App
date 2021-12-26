import React, { useContext } from 'react';
import star from '../pictures/star_black_24dp.svg';
import { ItemsContext } from '../Context/ItemsContext';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { useAuth0 } from '@auth0/auth0-react';
import { addToFavorite } from '../helpers/loadGifsFromFirebase';

export const GifGridItem = ({ title, id, url, isFavorite }) => {

    const { items, setItems } = useContext(ItemsContext);
    const { user } = useAuth0();

    const handleAddFavorite = async () => {

        const newGif = {
            title,
            url,
            id,
            isFavorite: true
        }
        addToFavorite(items, setItems, newGif, user);
    }
    const handleRemoveFromFavorites = () => {
        setItems(items.filter(item => item.id !== id));
        items.forEach(item => {
            if (item.id === id) {
                deleteDoc(doc(db, `${user.sub}/${id}`))
                    .then(() => {
                        console.log('doc eliminado')
                    })
                    .catch((error) => console.log(error))
            }
        });

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
                        onClick={handleRemoveFromFavorites}
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
