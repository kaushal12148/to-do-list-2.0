import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from "./Login.module.css"
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const [values,setValues] = useState({
        email:"",
        pass:""
    })
    const navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState("")
    const handleSubmission=()=>{

           if(!values.email || !values.pass){
            setErrorMsg("Fill All Fields")
            return
           }
           signInWithEmailAndPassword(auth,values.email,values.pass)
           .then((res)=>{
            console.log(res)
            navigate("/todo")   //on signin go to todo.js
           }).catch((err)=>{
            setErrorMsg(err.message)
           })

    }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <InputForm type="email" label="Email" placeholder="Enter Your Email"
             onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
             <InputForm type="password" label="Password" placeholder="Enter Your Password"
             onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
        
        <div className={styles.footer}>
               <b className={styles.error}>{errorMsg}</b>
               <button onClick={handleSubmission} >Login</button>
               <p>Or Create a new account? {" "}</p>
               <span>
                {/* Providing route for SignUp Page */}
                <Link to='/signup'>SignUp</Link>  
               </span>
             </div>
             </div>
    </div>
  )
}