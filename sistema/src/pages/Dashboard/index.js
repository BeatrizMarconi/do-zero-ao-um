import { useContext } from "react"
import { AuthContext } from "../../contexts/user"

export default function Dashboard() {

    const { signed, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return(
        <div>
            <h1>PAGINA Dashboard</h1>
            <p>{String(signed)}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}