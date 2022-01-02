import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { favoriteGifsReducer } from '../reducers/favoriteGifsReducer';
import { isLoadingReducer } from '../reducers/isLoadingReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    loading: isLoadingReducer,
    favorite: favoriteGifsReducer
})

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
)

