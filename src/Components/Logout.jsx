import {Link} from "react-router-dom";

function Logout(){

    return(
        <section className="logoutpage">
            <h2>You have Logged Out of the Student Management System.</h2>
            <div className="button-group">
                  <Link to="/login" className="btn-login-again">Login again?</Link>
                  <Link to="/" className="btn-return-home">return to home page</Link>
            </div>
                  
                    
        </section>
    )

}

export default Logout