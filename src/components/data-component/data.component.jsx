import React from 'react'
import Results from '../results-component/results.component'
import Chart from '../chart-component/chart.component'
import './data.css'

const Data = () => {
    return (
        <div className='data-wrapper'>
            <div className='data-content'>
            <Chart />
            <Results />
            </div>
        </div>
    )
}

export default Data