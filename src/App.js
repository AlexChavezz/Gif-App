import React, { useState } from 'react';
import { AppRouter } from './Router/AppRouter';
import { ItemsContext } from './Context/ItemsContext';


const App = () => {

    const [items, setItems] = useState([]);
    return (
        <ItemsContext.Provider value={{
            items,
            setItems
        }}>
            <AppRouter />
        </ItemsContext.Provider>
    );
}

export default App;