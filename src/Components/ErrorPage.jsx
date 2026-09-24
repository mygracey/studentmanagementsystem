
import {Link} from "react-router-dom";
function ErrorPage(){

    return(
        <section className="errorpage">
            <h2>Ooops! 404 Error. Page not found.</h2>
                <Link to="/">return to home page</Link>
        </section>
    )

}

export default ErrorPage