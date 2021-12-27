import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavoriteScreen } from '../components/Favorites/FavoriteScreen';
import GifExpertApp from '../components/GifExpertApp';
import { Header } from '../components/Header/Header';
import { ItemsContext } from '../Context/ItemsContext';
import { useAuth0 } from '@auth0/auth0-react';
import { loadGifsFromFirebase } from '../helpers/loadGifsFromFirebase';

export const RoutesComponent = () => {
    const { user } = useAuth0();
    const { setItems } = useContext(ItemsContext);

    useEffect(() => {
        async function getData() {
            const items = await loadGifsFromFirebase(user.sub);
            setItems(items);
        }
        if (user) {
            getData();
        }
    }, [user, setItems])

    // // -> alert logic
    // const alertRef = useRef(null);
    // const [alertState, setAlertState] = useState(false);

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route exact path="/" element={<GifExpertApp />} />
                <Route path="/favorites" element={<FavoriteScreen />} />
                {/* <Route path="*" element={<h4>not found</h4>} /> */}
            </Routes>
            {/* {
                    alertState &&

                    <section
                        className="alert"
                        ref={alertRef}
                    >

                    </section>
                } */}
        </div>
    )
}
