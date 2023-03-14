import React, { useState} from 'react';
import '../styles/Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="login">
            <div>
                <label> Username </label>
                <input placeholder="Enter your username"/>
            </div>
            <div>
                <label> Password </label>
                <input placeholder="Enter your password"/>
            </div>
        </div>
    )
}

export default Login;