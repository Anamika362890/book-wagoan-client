import React, { createContext, useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {

        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {


        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = () => {

        return signOut(auth);
    }




    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);


        });
        return () => {
            unSubscribe();
        }

    }, [])


    const authInfo = {
        createUser, user, logIn, logout, providerLogin, updateUser
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