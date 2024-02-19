import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase";


const AuthContext = React.createContext<any>(undefined);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: { children?: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user: any) {
        if(user)
        {
            setCurrentUser({...user});
        } else {
            setCurrentUser(null);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
