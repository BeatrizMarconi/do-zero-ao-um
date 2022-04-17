import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom"
import SignIn from '../pages/SignIn/index'
import SignUp from '../pages/SignUp/index'
import AuthProvider, { AuthContext } from "../contexts/user"
import Dashboard from '../pages/Dashboard'
import { useContext } from "react"

export default function Rotas () {

    const Private = ({children}) => {
        const {signed, loading} = useContext(AuthContext);

        if(loading){
            return <div>Carregando...</div>
        }

        if(!signed){
            return <Navigate to="/" />;
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path= "/" element= {<SignIn/>} />
                    <Route exact path= "register" element= {<SignUp/>} />

                    <Route exact path= "dashboard" element= {<Private><Dashboard/></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}
