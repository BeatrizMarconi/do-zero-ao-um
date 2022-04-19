import './style.css';
import {AuthContext} from '../../contexts/user'
import { useContext } from 'react';
import avatar from '../../assets/avatar.png'
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom';



export default function Header(){
    const {user} = useContext(AuthContext);

    return(
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl} alt='foto de perfil'/>
            </div>
            
            <Link to='/dashboard'>
                <FiHome color='white'/>
                Chamados
            </Link>

            <Link to='/customers'>
                <FiUser color='white'/>
                Clientes
            </Link>
                
            <Link to='/profile'>
                <FiSettings color='white'/>
                Configurações 
            </Link>           
        </div>
    )
}