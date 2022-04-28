import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom"
import SignIn from '../pages/SignIn/index'
import SignUp from '../pages/SignUp/index'
import Profile from "../pages/Profile"
import AuthProvider, { AuthContext } from "../contexts/user"
import Dashboard from '../pages/Dashboard'
import { useContext } from "react"
import Customers from '../pages/Customers';
import New from '../pages/New';

export default function Rotas () {

    const Private = ({children}) => {
        const {signed, loading} = useContext(AuthContext);

        if(loading){
            return <div>Carregando...</div>
        }

        if(!signed){
            return <Navigate to="/" />;
        }

        if(signed && !Private){
            console.log('foi')
            return <Navigate to="dashboard" />
            
        }

        return children;
    };

    return (
        <Router>
            <ToastContainer autoClose={3000}/>
            <AuthProvider>
                <Routes>
                    <Route exact path= "/" element= {<SignIn/>} />

                    <Route exact path= "register" element= {<SignUp/>} />

                    <Route exact path= "dashboard" element= {<Private><Dashboard/></Private>} />
                    
                    <Route exact path= "profile" element= {<Private><Profile/></Private>} />

                    <Route exact path= "customers" element={<Private><Customers/></Private>}/>

                    <Route exact path= "new" element= {<Private><New/></Private>}/>

                    <Route exact path= "new/:id" element= {<Private><New/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}
