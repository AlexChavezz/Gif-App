import React, { useEffect, useState } from 'react';
import { AppRouter } from './Router/AppRouter';
import { Provider } from "react-redux";
import { ItemsContext } from './Context/ItemsContext';
import { store } from './store/store';

const App = () => {

    const [items, setItems] = useState([]);
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;