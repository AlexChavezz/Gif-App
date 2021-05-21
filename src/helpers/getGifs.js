
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&lImit=20&api_key=1ywURhrBl5cdf1Eqb0nCB2PLVy7Yme9o`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}