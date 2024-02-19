import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase";


const AuthContext = React.createContext<any>(undefined);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: { children?: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user: any) {
        if(user)
        {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
