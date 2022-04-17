import { useState, useContext } from 'react';
import'../SignIn/signin.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import {AuthContext} from '../../contexts/user'

export default function SignUp() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);
  
  function handleSubmit(e){
    e.preventDefault();
    
    if(nome !== '' && email !== '' && password !== ''){
      signUp(email, password, nome)
    }
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src= {logo} alt= 'sistema logo'/>
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar conta</h1>
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}></input>
          <input type="text" placeholder="email@email.com" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          <input type="password" placeholder="******" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          <button type='submit'>Cadastrar</button>
        </form>

        <Link to='/'>Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}
  

  
  