import { useState, createContext, useEffect } from "react";
import firebase from "../services/firebaseConnection";
import { useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthProvider({children}){

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [loadingAuth, setLoadingAuth] = useState(false); 

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false);

    }, [])

    const login = (email, password) =>{
        console.log("login auth", { email, password });

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(password === "123"){
            setUser(loggedUser)
            navigate("dashboard")
        }
    };

    const logout = () => {
        console.log("logout")
        localStorage.removeItem('user')
        setUser(null)
        navigate("/")
    };

    async function signUp(email, password, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;

            await firebase.firestore().collection("users").doc(uid).set({
                nome: nome,
                avatarUrl: null,
            })

            .then( ()=>{

                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                };
            
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);    
            })

        })

        .catch((error)=>{
            console.log(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('user', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider 
        value={{
            signed: !!user, 
            user, 
            loading, 
            login, 
            logout, 
            signUp
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
