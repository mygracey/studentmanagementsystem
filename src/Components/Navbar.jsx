import {Link} from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


function Navbar(){

    return(
        <section className="navbar container">
            <div className="logo"><h3>Recordentia</h3></div>
            <ul>
                <Link to="/" className="link"><FaHome className="icon"/></Link>
                
                <Link to="/login" className="link"><FaSignInAlt className="icon"/></Link>
            </ul>
           
          

        </section>
    )
}

export default Navbar