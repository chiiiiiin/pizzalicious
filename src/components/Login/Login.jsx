import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currState}</h2>
                <i onClick={()=>setShowLogin(false)} class="fa-solid fa-x"></i>

            </div>
            <div className="login-input">
                {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your name' required/>}
                <input type="email" placeholder='Your Email' required />
                <input type="password" name="" id="" placeholder='Password' required />
                <div className="login-condition">
                    <input type="checkbox" required className='checked' />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")} >Click Here</span></p>
                :<p>Already have an account?<span onClick={()=>setCurrState("Log in")}>Login Here</span></p>
                }
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        </form>
    </div>
  )
}

export default Login