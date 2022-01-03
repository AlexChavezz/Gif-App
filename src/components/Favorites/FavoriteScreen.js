import React from 'react';
import { GifGridItem } from '../GifGridItem';
import { useSelector } from 'react-redux';

export const FavoriteScreen = () => {

    const { isLoggedIn } = useSelector(state => state.auth);
    const favoriteGifs = useSelector(state => state.favorite);
    return (
        <section>
            {
                isLoggedIn ?
                    <article className="gif-card-container favorites">
                        {
                            favoriteGifs.length > 0 ?
                                favoriteGifs.map(item => <GifGridItem {...item} key={item.id} />)
                                :
                                <>YOU HAVE NOT GIFS SAVED</>
                        }
                    </article>
                    :
                    <article className="favorite-screen-denied">
                        LOG IN TO SAVE YOUR FAVORITES GIFS
                    </article>
            }
        </section>
    )
}
