import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,   } from "firebase/auth";
import axios from "axios";
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
         setloading(true);
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Current user:', user);
      setUser(user);

      if (user?.email) {
        const emailUser = { email: user.email };

        axios.post('https://travling-server-site.vercel.app/jwt', emailUser, { withCredentials: true })
          .then(res => {
            console.log('JWT sent, token stored in cookie:', res.data);
          })
          .catch(error => {
            console.error('JWT error:', error.message);
          })
          .finally(() => setloading(false));
      } else {
        axios.post('https://travling-server-site.vercel.app/logout', {}, { withCredentials: true })
          .then(data => console.log('Logout success:', data.data))
          .catch(error => console.error('Logout error:', error.message))
          .finally(() => setloading(false));
      }
 });

    return () => unsubscribe(); 
  }, []);
//   normal

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (Curreuser) => {
    //         console.log(Curreuser);
    //         setUser(Curreuser)
    //         setloading(false)
    //     })
    //     return () => unsubscribe()

    // }, [])

   const Authinfo={ CreateUser,Login,createGoogle,logout,loading,user }
    return (
        <AuthConnect.Provider value={Authinfo}>
        {children}
    </AuthConnect.Provider>
    );
};

export default Authinction;