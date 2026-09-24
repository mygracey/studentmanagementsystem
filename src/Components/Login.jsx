


import { FaLock } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaPaperPlane } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { useState } from "react"
import {firebase_auth} from "../FirebaseConfig.jsx"
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate,Link} from "react-router-dom"


const auth=firebase_auth;
function Login(){
const navigate=useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [message,setMessage]=useState("")

const emailregex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/
function handleLogin(e){
    e.preventDefault()
    if(email=="" || password==""){
        setMessage("Your email and password are required!")
    }
    else if(emailregex.test(email) && password.length < 12 && password.length > 6){
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            if(user){
                setMessage("Hi " + email + " login successful! 😊")
                setTimeout(()=>{
                    navigate("/addstudents")
                },3000)
            }else{
                setMessage("Unknown User! 😒")
            }
        })
    }
    else{
        setMessage("Check email or password 😒")
    }
}

    return(
        <section className="login">
            <h2>Admin Login Page</h2>

            <p>Sign in to access students data.</p>
            <div className="user-circle">
                    <FaUser className="login-icon"/>
            </div>
              
            <form>
                <h4 id="message">{message}</h4>
                <div className="form-group">
                         <FaEnvelope className="icon"/>
                          <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
                        
                </div>
              
                <div className="form-group">
                     <FaLock className="icon"/>
                     <input type="password" placeholder="Enter your password " onChange={(e)=>{setPassword(e.target.value)}}/>
                   
                </div>

                <button onClick={handleLogin}><FaPaperPlane className="icon"/> Login</button>
                <p id="no-account">Don't have an account?</p> <Link to="/register" id="no-account-link">CreateOne</Link>
               
            </form>
        </section>
    )

}

export default Login