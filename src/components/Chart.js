import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{

    state = {
        xs: this.props.xs,
        ys: this.props.ys
    }

    render(){
      

        return(
            <div className='chart-div'>
                  <Line
                 data={{labels: this.state.xs,
                 datasets: [{
                    label: this.props.name,
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
