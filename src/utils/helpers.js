import{GoogleAuthProvider,signINWithRedirect} from "firebase/auth";
import {auth} from"../config/firebase.config"



const googleProvider = new GoogleAuthProvider()
export const signINWithGoogle = async () =>{
    await signINWithRedirect(auth, googleProvider).then(userCred =>{
        window.location.reload()
    })
}