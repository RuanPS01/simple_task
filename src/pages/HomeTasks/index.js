import React, { useCallback } from 'react'
import "./styles.css";
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function HomeTasks() {
    const logout = useCallback(() => {
        window.location.href = "/";
    },[]);

    return (
        <div>
            <main className="main">
            <div className="cardhome">
                <h3 className="title"><RiLogoutCircleLine onClick={logout} className="logoutIcon"/> Tarefas Pessoais</h3>
                {/* <div id="container"> */}
                <div className="form" action="">
                <input className="inputTaskTitle" placeholder="Ex: Fazer orçamento para o João" type="text"></input>
                <br></br>
                <br></br>
                </div>
            </div>
            <div className="creditsBar"><p className="creditsText">Software criado por Ruan Patrick de Souza</p></div>
            </main>
        </div>
    )
}
