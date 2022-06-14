import React from 'react'
import { Typography, createTheme } from '@mui/material'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@emotion/react';
import './display.css'
const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
      ].join(','),
    },
  });
const Display = () => {
    //state used to store name
    const [name, setName] = useState("");
    
    //get username from database happens once onload stored in useeffect to be called once
    useEffect(() => {
        const getUserName = async () => {
            try {

                //here you would set name to res.data (depending on what you are sending here from the database)
                setName('alex');

            } catch (err) {
                //depends on what the error message is stored as in the backend
                if (err?.response?.status === 403 || err?.response?.status === 401) {
                }
            }
        };
        getUserName();
    }, [])


    return (
        <div className='display-container'>
            <ThemeProvider theme={theme}>
                <Typography
                    align={'center'}
                    variant='h4'
                    color={'#00664F'}
                >
                    {` Welcome ${name}`}
                </Typography>
            </ThemeProvider>

        </div>
    )
}

export default Display