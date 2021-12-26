import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase.config"

export const loadGifsFromFirebase = async (uid) => {
    let gifs = [];
    const query = await getDocs(collection(db, `${uid}/`));
    query.forEach(doc => {
        gifs = [...gifs, { ...doc.data(), id: doc.id }]
    });
    return gifs;
}

export const addToFavorite = async (items, setItems, newGif, user) => {
    try {
        const docRef = await addDoc(collection(db, `${user.sub}`), newGif);

        if (items.length > 0) {
            setItems([...items, { ...newGif, id: docRef.id }]);

        } else {
            setItems([{ ...newGif, id: docRef.id }]);

        }
    } catch (error) {
        console.log(error)
    }
}