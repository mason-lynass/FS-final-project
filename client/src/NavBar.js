import { Link } from "react-router-dom"

function NavBar ({user, setUser}) {

    return (
        <div>
            <div id="HeaderTop">
                <Link id="navLogin" to="/login">
                    {user === null ? "Login" : "Logout"}
                </Link>
                <Link to="/">
                    <h1>Fantasy Sumo</h1>
                </Link>
                <Link id="navAccount" to="/account">
                    Account
                </Link>
            </div>
            <div id="NavBar">
                <Link to="/rules">Rules & Scoring</Link>
                <Link to="/draft">Draft Your Team</Link>
                <Link to="/results">All Teams / Results</Link>
                <Link to="/database">Browse the database</Link>
            </div>
        </div>
        
        
    )

}

export default NavBar