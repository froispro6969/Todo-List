import { useState } from 'react'
import '../styles/Auth.css'

export const Authentication = () => {

    const [onRegister, setOnRegister] = useState(false);

    const toggleRegister = () => {
        setOnRegister(!onRegister);
    }

    return (
        <div className="authentication">
            {onRegister ?
                <div className="auth-by-email">
                    <div className='auth-register'>
                        <h1 style={{ textAlign: "center" }}>Register</h1>
                        <input type="text" placeholder="Email..." />
                        <input type="password" placeholder="Password..." />
                        <input type="password" placeholder="Confirm Password..." />
                        <button>Create an account!</button>
                    </div>
                </div>
                :
                <div className="auth-by-email">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <input type="text" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <a onClick={toggleRegister}>Don't u have an account?</a>
                    <button>Login</button>
                    <h1 style={{ textAlign: "center" }}>or</h1>
                    <button>SignInWithGoogle</button>
                </div>
            }
        </div>
    )
}
