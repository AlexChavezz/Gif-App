import { useEffect, useRef, useState } from "react"

export const useAuth = () => {
    const isMounted = useRef(true);
    const [authState, setAuthState] = useState({ isLoading: true, data: null, isLoggedIn: false });
    
    useEffect(()=>{
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {

        const token = JSON.parse(localStorage.getItem('token'));

        fetch('http://localhost:8080/api/auth/validate', {
            headers: {
                'x-token': token
            }
        }).then(response => response.json())
            .then(response => {
                if ( isMounted.current ){
                    setAuthState({
                        data: response,
                        isLoading: false,
                        isLoggedIn: true
                    })
                }
            })
    }, [])

    return [authState];
}