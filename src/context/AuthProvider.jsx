import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
     createUserWithEmailAndPassword,
     GoogleAuthProvider,
      onAuthStateChanged, 
      signInWithEmailAndPassword, 
      signInWithPopup,
       signOut,
       updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
    const signInWithGoogle =()=>{
        setLoading(true);
        const provider = new GoogleAuthProvider()
            return signInWithPopup(auth,provider)
        
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => setUser(null))
            .finally(() => setLoading(false));
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('CurrentUser-->', currentUser)
            setLoading(false);
        })
        return ()=>{
          return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;