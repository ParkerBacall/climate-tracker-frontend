import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{

    state = {
        xs: [],
        ys: []
    }

    getChartData(){
        fetch('./TempData.csv')
        .then(response => response.text())
        .then(data => data.split('\n').slice(1))
        .then(table => table.forEach(row =>{
            const column = row.split(',')
           this.setState({
               xs: [...this.state.xs, column[0]],
               ys: [...this.state.ys, parseFloat(column[1]) + 14]
            })
           }))
        }

    componentDidMount(){
        this.getChartData()
    }

    render(){
      

        return(
            <div className='chart-div'>
                  <Line
                 data={{labels: this.state.xs,
                 datasets: [{
                    label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: false,
                    pointHoverBackgroundColor: 'rgb(255, 99, 132)',
                    pointHoverRadius: 7,
                    data: this.state.ys
                 }]
                }}
                 />
            </div>
        )
    }
}


export default Chart;
