import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'
import InputForm from '../InputForm/InputForm'

//  Importing forebase components
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp() {
    const [errorMsg,setErrorMsg] = useState("")
    const [values,setValues] = useState({
        name:"",
        email:"",
        pass:""
    })
    const [submitButtonDisabled,setsubmitButtonDisabled] = useState(false)
    const navigate = useNavigate()
    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill All Fields")
            return;
        }
        setErrorMsg("")
        setsubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then((res)=>{
            const user= res.user
            console.log(user)
            updateProfile(user,{
                displayName:values.name,
            })
            // On sign Up go again to homepage where there is login and signup Option
            navigate('/')  
        }).catch((err)=>{
            setsubmitButtonDisabled(false)
            setErrorMsg(err.message)
        })
    }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>SignUp</h1>

             <InputForm type="text" label="Name:" placeholder="Enter Your Name" 
             onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))}/>
             <InputForm type="email" label="Email" placeholder="Enter Your Email"
             onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}/>
             <InputForm type="password" label="Password" placeholder="Enter Your Password"
             onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>

             <div className={styles.footer}>
               <b className={styles.error}>{errorMsg}</b>
               <button onClick={handleSubmission} disabled={submitButtonDisabled}>SignUp</button>
               <p>Already have an account? {" "}</p>
               <span>
                <Link to='/login'>Login</Link>
               </span>
             </div>

        </div>
        
    </div>
  )
}