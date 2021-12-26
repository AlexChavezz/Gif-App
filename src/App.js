import React, { useState } from 'react';
import { AppRouter } from './Router/AppRouter';
import { Auth0Provider } from '@auth0/auth0-react';
import { ItemsContext } from './components/Context/ItemsContext';


const App = () => {

    const [items, setItems] = useState([]);

    return (
        <Auth0Provider
            domain="dev-k74lujcb.us.auth0.com"
            clientId="2HfS7KxsOLJCTuzOZ5uga8WGMCBS0iBu"
            redirectUri="http://localhost:3000"
        >
            <ItemsContext.Provider value={{
                items, 
                setItems
            }}>
                <AppRouter />
            </ItemsContext.Provider>
        </Auth0Provider>
    );
}

export default App;