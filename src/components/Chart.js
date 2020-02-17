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
                    backgroundColor: 'rgb(88, 200, 219)',
                    borderColor: 'hsl(133, 55%, 43%)',
                    pointBackgroundColor: false,
                    pointHoverBackgroundColor: 'rgb(88, 200, 219)',
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
