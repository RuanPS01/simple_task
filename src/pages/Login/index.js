import React, { useCallback, useEffect, useState, useRef } from 'react'
import url, {login, createUser} from '../../service/login_service';
import { BiTask } from 'react-icons/bi';
import "./styles.css";
import { Form } from '@unform/web'
import Input from '../../components/Input';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [eventVisible, setEventVisible] = useState(false);
    const [messageEvent, setMessageEvent] = useState('');
    const [localPassword, setLocalPassword] = useState('');
    const [localUserName, setLocalUserName] = useState('');
    const formRef = useRef();
    let history = useHistory();

    useEffect(() => {
        let usernameTemp = localStorage.getItem("username");
        let passwordTemp = localStorage.getItem("password");
        if(usernameTemp !== null && usernameTemp !== undefined && usernameTemp !== ''){
            if(passwordTemp !== null && passwordTemp !== undefined && passwordTemp !== ''){
                history.push('/home');
            }
        }else{
            history.push('/');
        }
    }, [])

    const eventMessage = useCallback((message) => {
        setMessageEvent(message);
        setEventVisible(true);
        setTimeout(() => {
            setEventVisible(false);
        }, 3500);
    },[]);

    const handleFormSubmit = data => {
        handleClickLogin(data.username, data.password);
    }
    const handleClickLogin = useCallback((username, password) => {
        // setLocalUserName(username);
        // setLocalPassword(password);
        if(username === '' || password === ''){
            eventMessage("Preencha os campos acima corretamente.");
        }else{
            login(`${url}/user/get/login/${username}`).then(result => {
                console.log("result -> ", result);
                if(result.userName === "" || result.userName === null || result.userName === undefined){
                    createUser(`${url}/user/save`, username, password).then(result => {
                        console.log("result -> ", result);
                        if(result === "Saved"){
                            eventMessage("Conta cadastrada! Clique novamente para entrar!");
                        }else{
                            eventMessage("Erro ao criar no banco de dados!");
                        }
                    }).catch(err => {
                        eventMessage("Erro de conexão!");
                    });
                }else{
                    if(password === result.password){
                        eventMessage("Bem vindo!");
                        localStorage.setItem("username", result.userName);
                        localStorage.setItem("password", result.password);
                        history.push('/home')
                    }else{
                        eventMessage("Senha incorreta!");
                    }
                }
                
            }).catch(err => {
                eventMessage("Erro de conexão!")
                createUser().then(result => {
    
                }).catch(err => {
    
                });
            });
        }
        
    },[]);

    return (
        <div>
            <main>
            <div className="card">
                {/* <div id="container"> */}
                <Form className="loginForm" ref={formRef} onSubmit={handleFormSubmit}>
                <h3 className="titleApp"><BiTask className="iconApp"/>Taskapp</h3>
                <br></br>
                <Input name="username" placeholder="Nome de usuário" type="text"></Input>
                <Input name="password" placeholder="Senha" type="password"></Input>
                <br></br>
                <br></br>
                <button type="submit">Entrar ou Registrar</button>
                <br></br>
                <p style={{opacity: eventVisible ? "1" : "0" , transition:" all 2s cubic-bezier(0.165, 0.84, 0.44, 1)"}} className="eventMessage">{messageEvent}</p>
                </Form>
            </div>
                <div className="creditsBar"><p className="creditsText">Software criado por Ruan Patrick de Souza</p></div>
            </main>
            
        </div>
    )
}
