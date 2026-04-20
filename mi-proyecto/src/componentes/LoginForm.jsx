import React from 'react'
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci";



const LoginForm = () => {
  return (
    <div className='login_wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input'>
                <input type="text" placeholder='Username' required/>
                <CiUser className='icon'/>
            </div>
            <div className='input'>
                <input type="password" placeholder='Password' required/>
                <CiLock className='icon'/>
            </div>

            <div className='rem-forg'>
                <label><input type="checkbox" />Remember me</label>
                <a href="·"> Forgot password? </a>
            </div>

            <button className='login' type='submit'>Login</button>

            <div className="register">
                <p>Don't have an account? sing in </p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm