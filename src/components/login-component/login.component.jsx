import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import { useState } from 'react';

const baseUrl = "http://localhost:8000";


const Login = () => {
    const [username, setUsername] = useState("");
    const [pass1, setPass1] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post
            ("http://localhost:8000/signin", JSON.stringify({
                username
                , pass1
            })
                , { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                //reset form and inform user that form was sent
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
                <form method="post" onSubmit={handleSubmit}>
                    <TextField label='username' onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' fullWidth required />
                    <TextField label='passowrd' onChange={(e) => setPass1(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
                <Typography > Do you have an account ?
                    <Link href="signup" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login