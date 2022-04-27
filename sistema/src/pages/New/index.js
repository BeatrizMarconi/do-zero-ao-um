import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'
import './style.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/user'

export default function New(){

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const { user } = useContext(AuthContext)


    useEffect(()=> {

    }, []);

    
    function handleRegister(e){
        e.preventDefault();

        alert("teste")
    }

    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }

    function handleOptionsChange(e){
        setStatus(e.target.value);
        console.log(e.target.value)
    }


    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className='container'>

                    <form className='form-profile' onSubmit={handleRegister}>

                        <label>Cliente:</label>
                        <select>
                            <option key={1} value={1}>
                                Beatriz
                            </option>
                        </select>

                        <label>Assunto:</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>

                            <option value="Visita Técnica">Visita Técnica</option>

                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className='status'>
                            <input type="radio" name="radio" value="Aberto" onChange={handleOptionsChange} checked={ status === "Aberto"}/>
                            <span>Em aberto</span>

                            <input type="radio" name="radio" value="Progresso" onChange={handleOptionsChange} checked={ status === "Progresso"}/>
                            <span>Progresso</span>

                            <input type="radio" name="radio" value="Atendido" onChange={handleOptionsChange} checked={ status === "Atendido"}/>
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea type="text" placeholder="Descreva seu problema (Opcional)." value={complemento} onChange={ (e)=> setComplemento(e.target.value)} />

                        <button type="submit">Registrar</button>

                    </form>
                </div>
            </div>

            <h1>TELA DE CADASTRO CHAMADOS</h1>
        </div>
    )
}