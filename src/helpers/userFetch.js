
export const userFetch = async (type, body) => {
    const url  = `https://gif-app-back-end.herokuapp.com/api/auth/${type}`;
    const bodyRes = await fetch( url,  {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
    })
    const res = await bodyRes.json();
    console.log(res)
    if( res.jwt ){
        localStorage.setItem('token', JSON.stringify(res.jwt));
    }
    return res.user.uid;
}