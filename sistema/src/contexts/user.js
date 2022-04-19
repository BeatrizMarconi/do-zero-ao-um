import { useState, createContext, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import firebase from "../services/firebaseConnection";
import { useNavigate }  from "react-router-dom";
import { toast } from 'react-toastify';



export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [loadingAuth, setLoadingAuth] = useState(false); 

    useEffect(() => {

        function loadStorage(){
            const recoveredUser = localStorage.getItem("user");

            if(recoveredUser){
                setUser(JSON.parse(recoveredUser))
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();

    }, [])

    async function signIn(email, password){
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async (value)=>{
            let uid= value.user.uid;

            const userProfile = await firebase.firestore().collection('users').doc(uid).get();

            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                email: value.user.email,
                avatarUrl: userProfile.data().avatarUrl
            };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            navigate("dashboard")
            toast.success('Bem vindo a plataforma!')
        })

        .catch((error)=>{
            console.log(error);
            toast.error('Ops algo deu errado!')
            setLoadingAuth(false)
        })
    }

    const logout = () => {
        console.log("logout")
        localStorage.removeItem('user')
        setUser(null)
        navigate("/")
    };

    async function signUp(email, password, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value)=>{
            console.log('Entrou no Then 1')
            let uid = value.user.uid;

            await firebase.firestore().collection("users").doc(uid).set({
                nome: nome,
                avatarUrl: null,
            })

            .then( ()=>{
                
                console.log('Entrou no Then 2')
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                };
            
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                navigate("dashboard")
                toast.success('Bem vindo a plataforma!')    
            })

        })

        .catch((error)=>{
            console.log(error);
            toast.error('Ops algo deu errado!')
            setLoadingAuth(false);
             
        })
    }

    function storageUser(data){
        localStorage.setItem('user', JSON.stringify(data));

    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('')
    }    

    return(
        <AuthContext.Provider 
        value={{
            signed: !!user, 
            user, 
            loading,  
            logout, 
            signUp,
            signIn,
            signOut,
            setUser,
            loadingAuth,
            storageUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
