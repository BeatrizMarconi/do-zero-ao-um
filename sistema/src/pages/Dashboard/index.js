import Header from "../../components/Header/index";
import Title from "../../components/Title";
import "./style.css"
import {FiMessageSquare, FiPlus} from "react-icons/fi"
import {Link} from "react-router-dom"

export default function Dashboard() {


    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Atendimento">
                    <FiMessageSquare size={25}/>
                </Title>

                <div className="container dashboard">
                    <span>Nenhum chamado registrado...</span>

                    <Link to="/new" className="new" >
                        <FiPlus/>
                        Novo chamado
                    </Link>

                </div>
            </div>
        </div>
    )
}