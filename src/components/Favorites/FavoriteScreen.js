import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext } from 'react'
import { useLinkClickHandler } from 'react-router-dom';
import { ItemsContext } from '../Context/ItemsContext';
import { GifGridItem } from '../GifGridItem';

export const FavoriteScreen = () => {

    const { isAuthenticated } = useAuth0();

    const { items } = useContext(ItemsContext);

    return (
        <section>
            {
                isAuthenticated ?
                <article className="gif-card-container favorites">
                    {
                        items.map( item => <GifGridItem {...item} key={item.id}/>)
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
