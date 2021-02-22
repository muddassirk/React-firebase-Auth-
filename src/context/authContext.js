
import React,{useContext, useState , userEffect, useEffect} from 'react'
import {auth} from "../firebase"
const AuthContext = React.createContext()



export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser , setCurrentUser] = useState()
    const [loading , setLoading] = useState()

    const value ={
        currentUser,
        signuup
    }
    
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    

    useEffect(() =>{
            const unsubscribe =  auth.onAuthStateChanged(user =>{
                setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    } , [])
    
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
