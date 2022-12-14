import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function Login ({setUser}) {

    return (
        <div id="LoginFlex">
            <LoginForm 
                setUser={setUser}
            />
            <SignupForm
                setUser={setUser}
            />
        </div>
    )
}

export default Login