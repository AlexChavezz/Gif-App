import React from 'react';
import { GifGridItem } from '../GifGridItem';
import { ItemsContext } from '../../Context/ItemsContext';
import { AuthContext } from '../../Context/AuthContext';
import { useSelector } from 'react-redux';

export const FavoriteScreen = () => {

    // const { items } = useContext(ItemsContext);
    // const { isLoggedIn } = useContext(AuthContext);

    const { isLoggedIn } = useSelector(state=> state.auth);
    const favoriteGifs = useSelector( state => state.favorite);
    console.log(favoriteGifs)
    return (
        <section>
            {
                isLoggedIn ?
                    <article className="gif-card-container favorites">
                        {
                            favoriteGifs.length > 0?
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
