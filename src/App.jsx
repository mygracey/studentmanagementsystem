
import Edit from "./Components/Edit";
import AddStudents from "./Components/AddStudents";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/ErrorPage";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App(){

  return(
    <section className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/addstudents" element={<AddStudents/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>


          <Route path="*" element={<ErrorPage/>}/> 
        </Routes>
         <Footer/>
      </Router>
      
    </section>
  )

}

export default App