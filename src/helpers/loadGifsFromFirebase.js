import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase.config"

export const loadGifsFromFirebase = async (uid) => {
    let gifs = [];
    const query = await getDocs(collection(db, `${uid}`));
    query.forEach(doc => {
        gifs = [...gifs, { ...doc.data(), id: doc.id }]
    });
    return gifs;
}

export const addToFavorite = async (newGif, uid) => {
    try {
        const {id} = await addDoc(collection(db, `${uid}`), newGif);
        return id;
    } catch (error) {
        console.log(error)
    }
}