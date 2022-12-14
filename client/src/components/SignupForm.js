import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignupForm ({setUser}) {
    
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCon, setPasswordCon] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    function handleSignupSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        setErrors([])
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password,
                password_con: passwordCon
            })
        }).then(r => {
            setIsLoading(false)
            if (r.ok) {
                r.json().then(user => setUser(user))
                navigate("/")
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }


    return (
        <div id="SignupFlex">
            <form id="SignupForm" onSubmit={handleSignupSubmit}>
                <div class="SignupLine">
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div class="SignupLine">
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="SignupLine">
                    <label>
                        Password confirmation:
                    </label>
                    <input
                        type="password"
                        value={passwordCon}
                        onChange={(e) => setPasswordCon(e.target.value)}
                    />
                </div>
                <button type="submit">
                    {isLoading ? "Loading" : "Sign Up!"}
                </button>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default SignupForm