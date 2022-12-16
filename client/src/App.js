import './index.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Login from './Login';
import Rules from './Rules';
import Draft from './Draft';
import Results from './Results';
import Database from './Database';
import Account from './Account';

function App() {

  const [user, setUser] = useState(null)
  // console.log(`user = ${user}`)
  const [rikishi, setRikishi] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/rikishis")
    .then(r => r.json())
    .then(r => setRikishi(r))
  }, [])

  // console.log(`in App ${user}`)

  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser}
        />
      <Routes>
        <Route
          path="/"
          element={<Homepage />} 
          />
        <Route
          path="/login"
          element={<Login 
                      setUser={setUser}
                  />}
          />
        <Route
          path="/account"
          element={<Account user={user} setUser={setUser} rikishi={rikishi}/>}
          />
        <Route
          path="/rules"
          element={<Rules />}
          />
        <Route
          path="/draft"
          element={<Draft user={user} setUser={setUser} rikishi={rikishi}/>}
          />
        <Route
          path="/results"
          element={<Results />}
          />
        <Route
          path="/database"
          element={<Database />}
          />
      </Routes>
    </div>
  );
}

export default App;
