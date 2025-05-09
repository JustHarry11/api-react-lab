import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Dashboard(){
    const { user } = useContext(UserContext)
    return (
        <main>
            <h1>Movies</h1>
            <p>Welcome back, { user.username }</p>
        </main>
    )
}