import { useContext } from "react"
import { AuthContext } from "../../contexts/user"
import Header from "../../components/Header/index";

export default function Dashboard() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return(
        <div>
            <Header/>
            <h1>PAGINA Dashboard</h1>
        </div>
    )
}