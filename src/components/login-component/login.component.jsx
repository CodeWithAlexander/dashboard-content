import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";






const Login = (props) => {
    const navigate = useNavigate();
    const BaseUrl='http://localhost:8000/'
    const [username, setUsername] = useState("");
    const [pass1, setPass1] = useState("");
    let data = new FormData();
    data.append("username", username)  
    data.append("pass1", pass1)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post
            (`${BaseUrl}signin`,data
                , { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                if(res.data.Status!=null){
                    console.log(res.data.Status);
              
                }
                else{
                    const username1 = res.data.username
                    localStorage.setItem('username', username1);
                    navigate("/dashboard");
                    console.log(username);
                }
                
                        })  
            .catch((err) => {
                //if error (log)
                console.log(err);
            });

    }

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
                    <TextField label='username' onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' fullWidth required />
                    <TextField label='passowrd' onChange={(e) => setPass1(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography > Do you have an account ?
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login