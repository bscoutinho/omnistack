import React, { useState } from 'react'
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function Login(props) {

    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username: username
        });

        const { _id } = response.data;

        props.history.push(`/dev/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder='Digite seu usuário' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
            
        </div>
    )
}