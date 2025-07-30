import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,   } from "firebase/auth";
export const AuthConnect = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authinction = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const CreateUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Curreuser) => {
            console.log(Curreuser);
            setUser(Curreuser)
            setloading(false)
        })
        return () => unsubscribe()

    }, [])

   const Authinfo={ CreateUser,Login,createGoogle,logout,loading,user }
    return (
        <AuthConnect.Provider value={Authinfo}>
        {children}
    </AuthConnect.Provider>
    );
};

export default Authinction;