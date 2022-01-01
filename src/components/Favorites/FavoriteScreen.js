import React, {  useContext } from 'react'
import { GifGridItem } from '../GifGridItem';
import { ItemsContext } from '../../Context/ItemsContext';
import { AuthContext } from '../../Context/AuthContext';

export const FavoriteScreen = () => {

    // const { isAuthenticated } = useAuth0();
    const { items } = useContext(ItemsContext);
    const { auth } = useContext(AuthContext);
    console.log(auth);
    return (
        <section>
            {/* {
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
            } */}
        </section>
    )
}
