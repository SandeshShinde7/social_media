import {useContext,createContext,useState,useEffect} from 'react'
import {auth,db} from '../../utils/init-firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

import {} from 'firebase/app'
import { getFirestore, doc, setDoc } from "firebase/firestore";
import ComplexNavbar from '../components/ComplexNavbar';


const AuthContext=createContext()



export default function AuthContextProvider({children})
{

    const [currentUser,setCurrentUser]=useState(null)
    // const [userData,setUserData]=useState(null)

    const provider = new GoogleAuthProvider();
    
    useEffect(() => {
      const unsubscribe=onAuthStateChanged(auth,user=>{
        console.log("state changed")
        // setCurrentUser(user)

      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    function registerUzer(email,password)
    {
            
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function loginUzer(email,password)
    {
        
         return signInWithEmailAndPassword(auth,email,password)
    }

    function logoutUzer(){
        return signOut(auth);
    }

    function loginWithProvider(){
       return  signInWithPopup(auth, provider)
        
    }

    const value={
        currentUser,
        setCurrentUser,
        registerUzer,
        loginUzer,
        logoutUzer,
        loginWithProvider,
        db

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    // console.log(useContext(AuthContext))
    return useContext(AuthContext)
}