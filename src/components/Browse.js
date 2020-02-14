import React from 'react'
import ChartList from './ChartList'

export default function Browse({graphs, graphAction}) {

    
    return (
        <div>
            <h2>browse:</h2>
            <ChartList graphAction={graphAction} graphs={graphs}/>
        </div>
    )
}
