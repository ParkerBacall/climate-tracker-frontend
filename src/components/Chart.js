import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

function Chart({graph, graphAction, xs, ys, name}){

    const handleClick = event => {
        graphAction(graph)
    }
        return(
            <div onClick={handleClick} className='chart-div'>
                  <Line
                 data={{labels: xs,
                 datasets: [{
                    label: name,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: false,
                    pointHoverBackgroundColor: 'rgb(255, 99, 132)',
                    pointHoverRadius: 7,
                    data: ys
                 }],
                 options: {
                    responsive: true,
                }}
                }
               
                 />
            </div>
        )
}


export default Chart;
