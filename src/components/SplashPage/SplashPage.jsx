import { Link } from "react-router";

export default function SplashPage(){
    return (
        <main>
            <h1>Movies</h1>
            <Link to='/register'>Create an account</Link>
        </main>
    )
}