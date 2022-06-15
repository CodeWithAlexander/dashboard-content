import React from 'react'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const [name,setUsername]=useState(localStorage.getItem('username'))
    

  return (
   name ? children : <Navigate  to='/'/>
  )
}

export default PrivateRoute