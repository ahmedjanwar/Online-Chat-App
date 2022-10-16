import React from 'react'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>
               iChat
            </span>
            <span className='title'>
               Login
            </span>
            <form>
                
                <input type="email" placeholder ="email" />
                <input type="password" placeholder ="pasword" />
                <input type="file"  id="file" style={{display:"none"}}/>
                {/*<label htmlFor="file">
                    <img src={Add} alt="" className=''/> <span>Add an avatar</span> 
                </label>*/}
                <button>Sign in</button>
                <p>you do not have an account? Register </p>
            </form>
        </div>
    </div>
  )
}

export default Login