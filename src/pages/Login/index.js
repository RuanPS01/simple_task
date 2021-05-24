import React, { useCallback, useState } from 'react'
import url, {login, createUser} from '../../service/login_service';
import { BiTask } from 'react-icons/bi';
import "./styles.css";

export default function Login() {
    const [eventVisible, setEventVisible] = useState(false);
    const [messageEvent, setMessageEvent] = useState(initialState);
    const [localPassword, setLocalPassword] = useState('');
    const [localUserName, setLocalUerName] = useState('');

    const eventMessage = useCallback((message) => {
        setEventVisible(false);
        setTimeout(() => {
            setEventVisible(false);
        }, 3500);
    },[]);

    const handleClickLogin = useCallback(() => {
        console.log("Local Username -> ", localUserName);
        console.log("Local Password -> ", localPassword);
        login(`${url}/user/save`, localUserName, localPassword).then(result => {
            if(result.username === "" || result.username === null || result.username === undefined){
                createUser(`${url}/user/save`, localUserName, localPassword).then(result => {
                    if(result === "Saved"){
                        eventMessage("Conta cadastrada! Clique novamente para entrar!");
                    }else{
                        eventMessage("Erro ao criar no banco de dados!");
                    }
                }).catch(err => {
                    eventMessage("Erro de conexão!");
                });
            }else{
                if(bcrypt.compareSync(localPassword, result.password)){
                    eventMessage("Bem vindo!");
                    localStorage.setItem("username", result.username);
                    localStorage.setItem("password", result.password);
                }
            }
            
        }).catch(err => {
            eventMessage("Erro de conexão!")
            createUser().then(result => {

            }).catch(err => {

            });
        });
    },[]);

    return (
        <div>
            <main>
            <div className="card">
                {/* <div id="container"> */}
                <form action="">
                <h3 className="titleApp"><BiTask className="iconApp"/>Taskapp</h3>
                <br></br>
                <input placeholder="Nome de usuário" type="text" value={localUserName}></input>
                <input placeholder="Senha" type="password" value={localPassword}></input>
                <br></br>
                <br></br>
                <button onClick={handleClickLogin}>Entrar ou Registrar</button>
                <br></br>
                <p visible={eventVisible}>{messageEvent}</p>
                </form>
            </div>
                <div className="creditsBar"><p className="creditsText">Software criado por Ruan Patrick de Souza</p></div>
            </main>
            
        </div>
    )
}
