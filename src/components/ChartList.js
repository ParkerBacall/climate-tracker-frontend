import React from 'react'
import Chart from './Chart'

export default function ChartList({graphs, graphAction}) {



    const showGraphs = graphs.map(graph => {
        return <Chart graphAction={graphAction} graph={graph} name={graph.name} xs={graph.xes.map(x=>x.data)} ys={graph.ys.map(y=>y.data)}/>
    })

    return (
        <div>
            {showGraphs}
        </div>
    )
}
