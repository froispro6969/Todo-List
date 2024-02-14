import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/Auth.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../config/Firebase';
import { useNavigate } from 'react-router-dom';


interface createUsers {
    email: string;
    password: string;
    confirmPassword: string;
}


export const Authentication = () => {

    const [onRegister, setOnRegister] = useState(false);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    const toggleRegister = () => {
        setOnRegister(!onRegister);
    }


    const {register, handleSubmit, formState:{errors}} = useForm<createUsers>({

    })

    const registerUser = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail,registerPassword);
            navigate("/main");
        }
        catch (error:any){
            console.log("Error creating a new user: ",error);
        }
        
    }
    const loginUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate("/main");
            console.log("Succes login");
        }
        catch(error:any){

        }
    }

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        navigate("/main");
    }



    return (
        <div className="authentication">
            <form onSubmit={handleSubmit(registerUser)}>
            {onRegister ?
                <div className="auth-by-email">
                    <div className='auth-register'>
                        <h1 style={{ textAlign: "center" }}>Register</h1>
                        <input type="text" placeholder="Email..." {...register("email")} onChange={(e)=>setRegisterEmail(e.target.value)}/>
                        <input type="password" placeholder="Password..." {...register("password")} onChange={(e)=>setRegisterPassword(e.target.value)}/>
                        <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} onChange={(e)=>setRegisterConfirmPassword(e.target.value)}/>
                        <input type="submit" value="Create new account!" />
                    </div>
                </div>
                :
                <div className="auth-by-email">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                    <input type="text" placeholder="Email..." onChange={(e) => setLoginEmail(e.target.value)}/>
                    <input type="password" placeholder="Password..." onChange={(e) => setLoginPassword(e.target.value)}/>
                    <a onClick={toggleRegister}>Don't u have an account?</a>
                    <button onClick={loginUser}>Login</button>
                    <h1 style={{ textAlign: "center" }}>or</h1>
                    <button onClick={signInWithGoogle}>SignInWithGoogle</button>
                </div>
            }
            </form>
        </div>
    )
}
