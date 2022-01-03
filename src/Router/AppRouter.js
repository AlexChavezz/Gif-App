import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutesComponent } from './RoutesComponent';
import { LoginAndRegisterScreen } from '../components/LoginAndRegister/LoginAndRegisterScreen';
import { LoggedRender } from './LoggedRender';
import { useDispatch, useSelector } from 'react-redux';
import { validSession } from '../actions/auth';
import { closeLoading } from '../actions/loading';
import { parseJwt } from '../helpers/parseJwt';

export const AppRouter = () => {
    // const [auth, setAuth] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const { setItems } = useContext(ItemsContext);

    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));

        if (token) {
            const { exp } = parseJwt(token);
            if (Date.now() >= (exp * 1000)) {
                dispatch(closeLoading());
                localStorage.removeItem('token');
            } else {
                dispatch(validSession());
            }
        } else {
            dispatch(closeLoading());
        }
        // setIsLoading(false);
    }, [dispatch])

    // useEffect(() => {
    //     if ( loading ){
    //         console.log(uid)
    //         // loadGifsFromFirebase();
    //     }
    // }, [])

    // const [ authState ] = useAuth();
    // const { isLoggedIn } = authState;
    // useEffect(() => {
    //     setAuth(authState);
    // }, [])

    // useEffect(() => {
    //     const token = JSON.parse(localStorage.getItem('token'));
    //     if (token) {
    //         fetch('http://localhost:8080/api/auth/validate', {
    //             headers: {
    //                 'x-token': token,
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(res => {
    //                 setAuth(res);
    //                 setIsLoggedIn(true);
    //                 loadGifsFromFirebase(res.uid).then( res => {
    //                     setIsLoading(false);
    //                     setItems(res)
    //                 })
    //             })
    //     } else {
    //         setIsLoading(false);
    //     }
    // }, [setItems])

    const { isLoggedIn } = useSelector(state => state.auth);

    if (loading) {
        return (
            <>Loading</>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={
                    <RoutesComponent />
                } />


                <Route path="/auth" element={
                    <LoggedRender isLoggedIn={isLoggedIn}>
                        <LoginAndRegisterScreen />
                    </LoggedRender>
                } />

                {/* <Route path="*" element={ <h1>Not found error</h1> }/> */}
            </Routes>
        </BrowserRouter>
    )
}
