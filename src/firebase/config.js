
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCjmKyWfrLmXX4CK35_bur_QcAG7sMqIRg",
    authDomain: "watchflow-ad2df.firebaseapp.com",
    projectId: "watchflow-ad2df",
    storageBucket: "watchflow-ad2df.appspot.com",
    messagingSenderId: "247231459241",
    appId: "1:247231459241:web:ec54971203a08a96d51eb8"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)
