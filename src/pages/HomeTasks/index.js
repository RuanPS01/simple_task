import React, { useCallback, useEffect, useState, useRef } from 'react'
import "./styles.css";
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useHistory } from "react-router-dom";
import Input from '../../components/Input';
import { Form } from '@unform/web';
// import DateTimePicker from '../../components/DateTimePicker';
import url, {getTasks, saveTask, editTask, deleteTask} from '../../service/tasks_service';

export default function HomeTasks() {
    const [username, setUsername] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [tasksList, setTasksList] = useState([]);
    // const [startDate, setStartDate] = useState('21/06/2021 02:30 am');
    const formRef = useRef();
    let history = useHistory();

    const logout = useCallback(() => {
        localStorage.clear();
        history.push('/');
    },[]);

    const getTasksCallBack = useCallback(() => {
        setTimeout(() => {
            getTasks(`${url}/task/list`).then((result) => {
                dataCollection = result;
                setTasksList(dataCollection);
            }).catch((err) => {
                console.log("Erro ao requisitar lista de tasks. Erro: ", err);
            });
        }, 300);
    },[tasksList]);

    const hundleClickDeleteTask = (item) => {
        deleteTask(`${url}/task/delete/${item.id}`).then((result) => {
            console.log("result -> ", result);
            setModalVisible(false);
        }).catch((err) => {
            console.log("Erro ao deletar task. Erro: ", err);
        });
        setTasksList([]);
        getTasksCallBack();
    }

    const handleFormSubmit = data => {
        console.log("data -> ", data);
        saveTask(`${url}/task/save`, data).then((result) => {
            console.log("result -> ", result);
            setModalVisible(false);
        }).catch((err) => {
            console.log("Erro ao salvar nova task. Erro: ", err);
        });
        setTasksList([]);
        getTasksCallBack();
        
    }

    const hundleClickNewTask = () => {
        setModalVisible(true);
    }
    let dataCollection = [];
    useEffect(() => {
        getTasksCallBack();
    }, []);

    useEffect(() => {
        let usernameTemp = localStorage.getItem("username");
        let passwordTemp = localStorage.getItem("password");
        if(usernameTemp !== null && usernameTemp !== undefined && usernameTemp !== ''){
            if(passwordTemp !== null && passwordTemp !== undefined && passwordTemp !== ''){
                setUsername(usernameTemp);
            }
        }else{
            history.push('/');
        }
    }, [])


    return (
        <div>
            <main className="main">
            <div className="cardhome">
                <h3 className="title"><RiLogoutCircleLine onClick={logout} className="logoutIcon"/> Tarefas Pessoais de {username}</h3>
                {/* <div id="container"> */}
                <div className="internalBox" action="">
                <button className="newTaskBT" onClick={hundleClickNewTask}>Nova tarefa</button>
                <div className="listPanel">
                    
                        {
                            tasksList.length > 0 ?
                                tasksList.map((item) => 
                                <>
                                <div onClick={() => hundleClickDeleteTask(item)} className="cardTask">
                                    <h3 className="titleTaskCard">{item.name}</h3>
                                    <p>Acontecerá na data de {item.date} com duração de {item.duration} em {item.local}</p>
                                    <p>Convidados: {item.guests}</p>
                                </div>
                                </>
                            )
                            :<></>
                        }
                        {/* <h3 className="titleTaskCard">title----------------------------</h3>
                        <p>Acontecerá na data de (datatime) com duração de (duration) em (local)</p>
                        <p>Convidados: (guests)</p> */}
                    
                </div>
                
                
                    
                </div>
            </div>
            <div className="creditsBar"><p className="creditsText">Software criado por Ruan Patrick de Souza</p></div>
            </main>
            <div className="modal" style={{opacity: modalVisible ? "1" : "0" , transition:" all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)", "pointer-events":  modalVisible ? "auto" : "none"}}>
                    <div className="modalContent">
                    <Form ref={formRef} onSubmit={handleFormSubmit}>
                        <h3>Nova da tarefa 
                        </h3><Input name="name" className="inputTaskTitle" placeholder="Ex: Fazer orçamento para o João" type="text"></Input>
                        <Input className="inputTaskTitle" name="date" className="inputTaskTitle" placeholder="Data" type="text"></Input>
                        {/* <DateTimePicker /> */}
                        <Input name="duration" className="inputTaskTitle" placeholder="Duração" type="text"></Input>
                        <Input name="local" className="inputTaskTitle" placeholder="Local" type="text"></Input>
                        <Input name="guests" className="inputTaskTitle" placeholder="Convidados" type="text"></Input>
                        <br></br>
                        <br></br>
                        <button className="saveButton" type="submit">Salvar</button>
                        <button className="cancelButton" onClick={() => setModalVisible(false)}>Cancelar</button>
                    </Form>
                    </div>
            </div>
        </div>
    )
}
