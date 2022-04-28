import firebase from '../../services/firebaseConnection'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'
import './style.css'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/user'
import { toast } from 'react-toastify';

export default function New(){

    const [customersLoad, setCustomersLoad] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customersSelected, setCustomersSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const { user } = useContext(AuthContext)


    useEffect(()=> {

        async function loadCustomers(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista= [];

                snapshot.forEach((doc)=> {
                    lista.push({
                        id:doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })

                if(lista.length === 0){
                    console.log('NENHUMA EMPRESA ENCONTRADA')
                    setCustomers([{id: 1, nomeFantasia: 'Freela'}])
                    setCustomersLoad(false)
                    return;
                }

                setCustomers(lista);
                setCustomersLoad(false)
            })
            .catch((error)=>{
                console.log('deu algum erro!', error)
                setCustomersLoad(false)
                setCustomers([{id: 1, nomeFantasia: ''}])
            })
        }

        loadCustomers();

    }, []);


    async function handleRegister(e){
        e.preventDefault();

        await firebase.firestore().collection('chamados')
        .add({
            created: new Date(),
            cliente: customers[customersSelected].nomeFantasia,
            clienteId: customers[customersSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then(()=> {
            toast.success('Chamado registrado com sucesso!')
            setComplemento('');
            setCustomersSelected(0);
        })
        .catch((err)=> {
            console.log(err)
            toast.error('Ops algo deu errado!')
        })
    
    }
    //chamado quando troca o assunto
    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }
    //chamado quando troca o status
    function handleOptionsChange(e){
        setStatus(e.target.value);
    }
    //chamado quando troca o cliente
    function handleChangeCustomers(e){
        setCustomersSelected(e.target.value);
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

                        {customersLoad ? (
                            <input type="text" disabled={true} value="Carregando clientes..."/>
                        ) : (
                            <select value={customersSelected} onChange={handleChangeCustomers}>
                            {customers.map((item, index)=> {
                                return(
                                    <option key={item.id} value={index}>
                                        {item.nomeFantasia}
                                    </option>
                                )
                            })}
                            </select>
                        )}

                        

                        <label>Assunto:</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>

                            <option value="Visita Técnica">Visita Técnica</option>

                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className='status'>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="Aberto" 
                            onChange={handleOptionsChange} 
                            checked={ status === "Aberto"}/>
                            <span>Em aberto</span>

                            <input 
                            type="radio" 
                            name="radio" 
                            value="Progresso" 
                            onChange={handleOptionsChange} 
                            checked={ status === "Progresso"}/>
                            <span>Progresso</span>

                            <input 
                            type="radio" 
                            name="radio" 
                            value="Atendido" 
                            onChange={handleOptionsChange} 
                            checked={ status === "Atendido"}/>
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea 
                        type="text" 
                        placeholder="Descreva seu problema (Opcional)." 
                        value={complemento} 
                        onChange={ (e)=> setComplemento(e.target.value)} />

                        <button type="submit">Registrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}