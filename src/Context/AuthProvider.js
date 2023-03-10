import React, { createContext, useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }




    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);


        });
        return () => {
            unSubscribe();
        }

    }, [])


    const authInfo = {
        createUser, user, logIn, logout, providerLogin, updateUser, loading
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;