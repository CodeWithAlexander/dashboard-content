import React from 'react'
import Dashboard from '../dashboard-component/dashboard.component';
import Login from '../login-component/login.component';
import Signup from '../signup-component/signup.component';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Dashboard /> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  )
}

export default App