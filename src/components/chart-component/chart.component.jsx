import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from '@mui/material';
import './chart.css'
// to make this work run this in the terminal npm install react-apexcharts --save
// the data found in the state should be fetched from the database

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Tests",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],


            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    zoom: {
                        enabled: false
                    }
                },
                fill: {
                    colors: ['#00664F'],
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Number of Tests Taken',
                    align: 'center'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },


        };
    }



    render() {
        return (



            <Box sx={{ width: '100%' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type='bar' height={220} />
            </Box>

        );
    }
}

export default Chart;