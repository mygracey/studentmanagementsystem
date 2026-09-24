
import {Link} from "react-router-dom";
function Home(){
    return(
        <section className="home">
            <h1>Student Record Management System</h1>
            
                <Link to="/login" className="btn-login">Login</Link>

        </section>
    )
}

export default Home