
export const userFetch = async (type, body) => {
    const url  = `http://localhost:8080/api/auth/${type}`;
    const bodyRes = await fetch( url,  {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
    })
    const res = await bodyRes.json();
    if( res.jwt ){
        localStorage.setItem('token', JSON.stringify(res.jwt));
    }
    console.log(res)
}