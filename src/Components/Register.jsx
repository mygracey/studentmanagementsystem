


import { FaLock } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaPaperPlane } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { useState } from "react"
import {firebase_auth} from "../FirebaseConfig.jsx"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"


function Register(){

const navigate=useNavigate()

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[cpassword,setCpassword]=useState("")
const[message,setMessage]=useState("")

const auth=firebase_auth;

const emailregex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/

function handleRegister(e){
    e.preventDefault()

    if(email=="" || password=="" || cpassword==""){
        setMessage("Please fill in all fields")
    }
   else if(!emailregex.test(email)){
    setMessage("Please check your email input.")
   }
   else if(password.length > 12 || password.length <6){
    setMessage("Your password should not be less than 6 characters and not more than 12 characters long.")
   }
    
   else{
    setMessage("Account creation successful! 😊")
    createUserWithEmailAndPassword(auth,email,password);
    setTimeout(()=>{
          navigate("/login")
    },3000)
  
   }

}


    return(
        <section className="register">
            <h2>Admin Create Account Page</h2>

            <p>Sign Up to access students data.</p>
            <div className="user-circle">
                    <FaUser className="register-icon"/>
            </div>
              
            <form>
                <h4 id="message">{message}</h4>
                <div className="form-group">
                         <FaEnvelope className="icon"/>
                          <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        
                </div>
              
                <div className="form-group">
                    
                     <FaLock className="icon"/>
                     <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/>
                   
                </div>
                <div className="form-group">
                     <FaLock className="icon"/>
                     <input type="password" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}} />
                   
                </div>

                <button onClick={handleRegister}><FaPaperPlane className="icon"/>Create Account</button>
               
            </form>
        </section>
    )

}

export default Register