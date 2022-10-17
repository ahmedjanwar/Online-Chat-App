import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {

  const [err,setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
      e.preventDefault()
      const email = e.target[0].value;
      const password = e.target[1].value;
      try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      }catch(err){
          setErr(true)
      }
  

  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>
               iChat
            </span>
            <span className='title'>
               Login
            </span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder ="email" />
                <input type="password" placeholder ="pasword" />
                <input type="file"  id="file" style={{display:"none"}}/>
                {/*<label htmlFor="file">
                    <img src={Add} alt="" className=''/> <span>Add an avatar</span> 
                </label>*/}
                <button>Sign in</button>
              {err && <span>Sorry Something went wrong!</span>}
                <p>you do not have an account? <Link to="/register">Register</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Login