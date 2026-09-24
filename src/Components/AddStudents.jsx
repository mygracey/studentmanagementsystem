import {useState,useEffect} from "react";
import {database} from "../FirebaseConfig.jsx";
import {push,ref,onValue,remove} from "firebase/database";
import {FaEdit,FaTrash} from "react-icons/fa";
import {useParams,Link,useNavigate} from "react-router-dom";



function AddStudents(){

const navigate=useNavigate()
const[name,setName]=useState("")
const[age,setAge]=useState("")
const[email,setEmail]=useState("")
const[message,setMessage]=useState("")
const[students,setStudents]=useState({})




function createRecord(e){
    e.preventDefault()

    if(name=="" || age=="" || email==""){
        setMessage("Please fill in all fields!")
    }
    else{
        const studentRef=ref(database,"students")
        push(studentRef,{name:name,age:age,email:email})
       
        setMessage(`${name}'s data has been added to the database`)
               
        
    }

}

useEffect(()=>{
 const studentRef=ref(database,"students")
 onValue(studentRef,(snapshot)=>{
    const data=snapshot.val()

    if(data){
        setStudents(data);
    }
    else{
        setStudents({})
    }
 })
},[])


function deleterecord(id){
    const studentRef=ref(database,`students/${id}`)
    remove(studentRef)

}

    return(
        <section className="addstudents">
            <h2>Add Students Record</h2>

            <form>
                <h4>{message}</h4>
                <input type="text" placeholder="Enter student's name" onChange={(e)=>{setName(e.target.value)}}/><br/>
                <input type="number" placeholder="Enter student's age" onChange={(e)=>{setAge(e.target.value)}}/><br />
                <input type="text" placeholder="Enter student's email" onChange={(e)=>{setEmail(e.target.value)}} /><br />
                
                <button onClick={createRecord}>Create Record</button>

            </form>
        <div className="table-container">
             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                  
                </thead>
                    {Object.entries(students).map(([id,student])=>{
                        return(
                         <tr key={id}>
                            
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/edit/${id}`} className="icon edit"><FaEdit/></Link>
                                    
                                    <FaTrash className="icon trash" onClick={()=>deleterecord(id)}/>
                                </td>
                            
                         </tr>
                        )
                    })}  
                
                <tbody>
                   
                </tbody>
            </table>
        </div>
           
        </section>
    )

}

export default AddStudents