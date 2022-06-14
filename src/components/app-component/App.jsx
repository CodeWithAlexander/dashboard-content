import React from 'react'
import Dashboard from '../dashboard-component/dashboard.component';
import Login from '../login-component/login.component';
import Signup from '../signup-component/signup.component';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <Router>
      <Routes>
        {/* <Dashboard /> */}
        <Route exact path="/" element={<Login
          setUsername={setUsername}
          username={username}
        />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/dashboard" element={<Dashboard 
          username={username}
        />}></Route>
      </Routes>
    </Router>
  )
}

export default App