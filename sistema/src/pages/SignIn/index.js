import { useContext, useState } from 'react';
import'./signin.css';
import logo from '../../assets/logo.png';
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/user';

export default function SignIn() {

  const { signed, signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      signIn(email, password)
    }
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src= {logo} alt= 'sistema logo'/>
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="email@email.com" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          <input type="password" placeholder="******" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          <button type='submit'>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
        </form>
        <p>{String(signed)}</p>
        <Link to='/register'>Criar uma conta</Link>
      </div>
    </div>
  );
}
  

  