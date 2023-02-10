import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './Sidenav';
import './Todo.css'

function App(props) {
  const [active,setActive] = useState("INBOX")
  const navigate = useNavigate()

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className="inbox">
      
      {props.name ? (<div>
        <Header name = {props.name}/>  
      <div className="row">
        <div className='col-md-2'>
          <Sidenav change={setActive}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={active}/>
        </div>

        <button className="inbox__button" onClick={handleSignOut}>SignOut</button>
      </div>
      </div>)

       : "Login Please"}

     
    </div>
  );
}

export default App;