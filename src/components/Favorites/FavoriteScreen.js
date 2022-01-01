import React, {  useContext } from 'react'
import { GifGridItem } from '../GifGridItem';
import { ItemsContext } from '../../Context/ItemsContext';
import { AuthContext } from '../../Context/AuthContext';

export const FavoriteScreen = () => {

    const { items } = useContext(ItemsContext);
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <section>
            {
                isLoggedIn ?
                    <article className="gif-card-container favorites">
                        {
                            items.length > 0?
                            items.map(item => <GifGridItem {...item} key={item.id} />)
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
