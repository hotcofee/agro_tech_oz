import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 as id } from 'uuid'

const firebaseConfig = {
    apiKey: "AIzaSyC1D3eMWqlwukVYV9uXfw9qucDc-tuS6wg",
    authDomain: "agrotech-66b5c.firebaseapp.com",
    projectId: "agrotech-66b5c",
    storageBucket: "agrotech-66b5c.appspot.com",
    messagingSenderId: "87909301961",
    appId: "1:87909301961:web:83e82f41c4eda430c0d718"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export async function loadPhoto(file) {
    const getRef = ref(storage, id())
    await uploadBytes(getRef, file)
    const url = await getDownloadURL(getRef)
    return url
} 