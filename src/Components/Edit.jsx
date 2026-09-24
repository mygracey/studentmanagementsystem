import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {database} from "../FirebaseConfig.jsx";
import {ref,get,update} from "firebase/database";
import {FaEdit} from "react-icons/fa";


function Edit(){
const {id}=useParams();
const navigate=useNavigate();
const[name,setName]=useState("")
const[age,setAge]=useState("")
const[email,setEmail]=useState("")
const[message,setMessage]=useState("")


//Fetch exact data on load
useEffect(()=>{
    const studentRef=ref(database,`students/${id}`)
    get(studentRef).then((snapshot)=>{
        if(snapshot.exists()){
            setName(snapshot.val().name)
            setAge(snapshot.val().age)
            setEmail(snapshot.val().email)
        }
    })

},[id])

function editRecord(e){
    e.preventDefault()

    const studentRef=ref(database,`students/${id}`)
    update(studentRef,{name:name,age:age,email:email})
    setMessage(name + "s credentials have been updated in the database")
    setTimeout(()=>{
         navigate("/addstudents")
    },3000)
   


}

    return(
        <section className="editpage">
            <h2>Edit Student Data</h2>
             <form>
                <h4>{message}</h4>
                <input type="text" placeholder="Enter student's name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                <input type="number" placeholder="Enter student's age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br />
                <input type="text" placeholder="Enter student's email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br />
                
                <button onClick={editRecord}><FaEdit/>Edit Record</button>

            </form>
        </section>
    )
}

export default Edit