import React, { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [state, setstate] = useState({ data: null, loading: true, error: null});

    useEffect(() => {
        fetch( url )
        .then(res => res.json())
        .then( data => {
            setstate({
                loading: false,
                error: null, 
                data
            })
        })
    }, [])
    return state;
}
