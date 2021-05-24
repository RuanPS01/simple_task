import React, { useCallback, useState } from 'react'
import url, {login, createUser} from '../../service/login_service';
import { BiTask } from 'react-icons/bi';
import "./styles.css";

export default function Login() {
    const [eventVisible, setEventVisible] = useState(false);
    const [messageEvent, setMessageEvent] = useState('');
    const [localPassword, setLocalPassword] = useState('');
    const [localUserName, setLocalUserName] = useState('');

    const eventMessage = useCallback((message) => {
        setMessageEvent(message);
        setEventVisible(false);
        setTimeout(() => {
            setEventVisible(false);
        }, 3500);
    },[]);

    const handleClickLogin = useCallback(() => {
        console.log("Local Username -> ", localUserName);
        console.log("Local Password -> ", localPassword);
        login(`${url}/user/save`, localUserName).then(result => {
            if(result.username === "" || result.username === null || result.username === undefined){
                createUser(`${url}/user/save`, localUserName, localPassword).then(result => {
                    if(result === "Saved"){
                        eventMessage("Conta cadastrada! Clique novamente para entrar!");
                    }else{
                        eventMessage("Erro ao criar no banco de dados!");
                    }
                }).catch(err => {
                    eventMessage("Erro de conexão2!");
                });
            }else{
                if(localPassword === result.password){
                    eventMessage("Bem vindo!");
                    localStorage.setItem("username", result.username);
                    localStorage.setItem("password", result.password);
                }
            }
            
        }).catch(err => {
            eventMessage("Erro de conexão1!")
            createUser().then(result => {

            }).catch(err => {

            });
        });
    },[]);

    const handleInputUsername = useCallback((event) => {
        setLocalUserName(event.target.value);
    },[]);

    const handleInputPassword = useCallback((event) => {
        setLocalPassword(event.target.value);
    },[]);

    return (
        <div>
            <main>
            <div className="card">
                {/* <div id="container"> */}
                <form action="">
                <h3 className="titleApp"><BiTask className="iconApp"/>Taskapp</h3>
                <br></br>
                <input placeholder="Nome de usuário" type="text" onChange={handleInputUsername}></input>
                <input placeholder="Senha" type="password" onChange={handleInputPassword}></input>
                <br></br>
                <br></br>
                <button onClick={handleClickLogin}>Entrar ou Registrar</button>
                <br></br>
                <p>{messageEvent}</p>
                </form>
            </div>
                <div className="creditsBar"><p className="creditsText">Software criado por Ruan Patrick de Souza</p></div>
            </main>
            
        </div>
    )
}
