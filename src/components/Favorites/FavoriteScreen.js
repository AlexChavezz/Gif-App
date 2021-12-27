import React, {  useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { GifGridItem } from '../GifGridItem';
import { ItemsContext } from '../../Context/ItemsContext';

export const FavoriteScreen = () => {

    const { isAuthenticated } = useAuth0();
    const { items } = useContext(ItemsContext);


    return (
        <section>
            {
                isAuthenticated ?
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
