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

  const [user, setUser] = useState([])

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
          element={<Login />}
          />
        <Route
          path="/account"
          element={<Account />}
          />
        <Route
          path="/rules"
          element={<Rules />}
          />
        <Route
          path="/draft"
          element={<Draft />}
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
