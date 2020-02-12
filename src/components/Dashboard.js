import React from 'react'
import Chart from './Chart'

export default function Dashboard({name, renewable_xs, renewable_ys, car_xs, car_ys}) {


    return (
        <div className='dashboard-h1'>
            <h1>{name}'s Climate Impact Dashboard</h1>
            <Chart name={'Renewable Energy Over Time'} xs={renewable_xs} ys={renewable_ys} />
            <Chart name={'Passenger Car Registraions Over Time'} xs={car_xs} ys={car_ys} />
        </div>
    )
}