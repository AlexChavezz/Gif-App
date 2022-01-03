import React, { useRef } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { addToFavorite } from '../helpers/loadGifsFromFirebase';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteGifs, removeGifs } from '../actions/favoriteGifs';
export const GifGridItem = ({ title, id, url, isFavorite, setAlertLogin }) => {

    const refButton = useRef(null);
    const dispatch = useDispatch();
    const { uid, isLoggedIn } = useSelector(state => state.auth);
    const items = useSelector(state => state.favorite);

    const handleAddFavorite = async () => {
        if (isLoggedIn) {
            const newGif = {
                title,
                url,
                id,
                isFavorite: true
            }
            const newId = await addToFavorite(newGif, uid);
            dispatch(favoriteGifs({ ...newGif, id: newId }));
            refButton.current.style.backgroundColor = '#22B244';
            refButton.current.style.color = '#fff';
        } else {
            setAlertLogin(true);
        }
    }
    const handleRemoveFromFavorites = () => {
        dispatch(removeGifs(id));
        items.forEach(item => {
            if (item.id === id) {
                deleteDoc(doc(db, `${uid}/${id}`))
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
                            src='./star_black_24dp.svg'
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
                            src='./star_black_24dp.svg'
                            alt="star-img"
                            id="star-img"
                        />
                        REMOVE FROM FAVORITES
                    </button>
            }
        </div>
    );
}
