import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { CardContent, Typography, Box, Card } from '@mui/material';
import './results.css'

const Results = () => {

    //store result values 
    const [result, setResult] = useState([]);

    const cardStyle = {
        background: '#00664F',
        color: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }





    //get results from the database to display on load
    useEffect(() => {
        //setResult would contain the values to be displayed inside the card at a later stage



        setResult([
            { data_title: "Result 1", result_title: 'Alexander', result: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius totam, obcaecati facere quisquam laudantium excepturi at pariatur non, consectetur suscipit aliquam ab possimus dolorem unde corrupti voluptatum ullam perspiciatis quo." }
            , { data_title: "Result 2", result_title: 'Steven', result: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius totam, obcaecati facere quisquam laudantium excepturi at pariatur non, consectetur suscipit aliquam ab possimus dolorem unde corrupti voluptatum ullam perspiciatis quo." }
            , { data_title: "Result 3", result_title: 'Robert', result: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius totam, obcaecati facere quisquam laudantium excepturi at pariatur non, consectetur suscipit aliquam ab possimus dolorem unde corrupti voluptatum ullam perspiciatis quo." }
        ])
    }, [])

    //results to display
    const results = result.map((data, id) => {
        return <Grid item xs={12} md={6} lg={4} key={id}>
            <Box sx={{ minWidth: 300, fontFamily: 'Monospace'}}>
                <Card variant="outlined" style={
                    cardStyle
                }
                    elevation={1}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {data.data_title}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="orange" gutterBottom>
                            {/* this is an example of how to display an element that has been fetched */}
                            {data.result_title}
                        </Typography>
                        <Typography variant="body2">
                            {data.result}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>

    })

    return (
        <div className='results-container'>
            <Grid container spacing={3} justifyContent="center" alignItems="center">

                {results}

            </Grid> 
        </div>
    )
}

export default Results