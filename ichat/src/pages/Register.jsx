import React from 'react'
import Add from "../images/addAvatar.png"

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>
               iChat
            </span>
            <span className='title'>
                Resgister
            </span>
            <form>
                <input type="text" placeholder ="Name" />
                <input type="email" placeholder ="email" />
                <input type="password" placeholder ="pasword" />
                <input type="file"  id="file" style={{display:"none"}}/>
                <label htmlFor="file">
                    <img src={Add} alt="" className=''/> <span>Add an avatar</span> 
                </label>
                <button>Sign up</button>
                <p>you have an account? Login </p>
            </form>
        </div>
    </div>
  )
}

export default Register