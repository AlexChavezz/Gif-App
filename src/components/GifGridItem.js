import React, { useContext, useRef } from 'react';
import { ItemsContext } from '../Context/ItemsContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { useAuth0 } from '@auth0/auth0-react';
import { addToFavorite } from '../helpers/loadGifsFromFirebase';

export const GifGridItem = ({ title, id, url, isFavorite, setAlertLogin }) => {

    const { items, setItems } = useContext(ItemsContext);
    const { user, isAuthenticated } = useAuth0();

    const refButton = useRef(null);

    const handleAddFavorite = async () => {
        if( isAuthenticated ) {
            const newGif = {
                title,
                url,
                id,
                isFavorite: true
            }
            addToFavorite(items, setItems, newGif, user);
            refButton.current.style.backgroundColor = '#22B244';
            refButton.current.style.color = '#fff';
        }else{
            setAlertLogin(true);
        }

    }
    const handleRemoveFromFavorites = () => {
        setItems(items.filter(item => item.id !== id));
        items.forEach(item => {
            if (item.id === id) {
                deleteDoc(doc(db, `${user.sub}/${id}`))
                    .then(() => {
                        
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
                        ref={refButton}
                    >
                        <img
                            src='./pictures/star_black_24dp.svg'
                            alt="star-img"
                            id="star-img"
                        />
                        ADD TO FAVORITES
                    </button>
                    :
                    <button
                        onClick={handleRemoveFromFavorites}
                        ref={refButton}
                    >
                        <img
                            src='./pictures/star_black_24dp.svg'
                            alt="star-img"
                            id="star-img"
                        />
                        REMOVE FROM FAVORITES
                    </button>
            }
        </div>
    );
}
