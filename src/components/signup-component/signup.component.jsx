import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const BaseUrl = 'http://localhost:8000/'
    let data = new FormData();
    const [username, setUsername] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    data.append("username", username)
    data.append("fname", fname)
    data.append("lname", lname)
    data.append("email", email)
    data.append("pass1", pass1)
    data.append("pass2", pass2)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}')


    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post
            (`${BaseUrl}signup`, data
                , { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                toast.warn(res.data.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });

            })
            .catch((err) => {
                //if error (log)
                console.log(err);
            });


    }

    return (

        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
                    <TextField fullWidth label='Username' onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Username" type="text" required />
                    <TextField fullWidth label='First Name' onChange={(e) => setFname(e.target.value)} placeholder="Enter Your First Name" type="text" required />
                    <TextField fullWidth label='Last Name' onChange={(e) => setLname(e.target.value)} placeholder="Enter Your Last Name" type="text" required />
                    <TextField fullWidth label='Email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Adress" type="email" required />
                    <TextField fullWidth label='Password' onChange={(e) => setPass1(e.target.value)} placeholder="Enter your password" type="password" required />
                    <TextField fullWidth label='Confirm Password' onChange={(e) => setPass2(e.target.value)} placeholder="Confirm your password" type="password" required />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" required />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
        </Grid>
    )
}

export default Signup;