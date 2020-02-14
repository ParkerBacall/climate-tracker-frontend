import React from 'react'
import ChartList from './ChartList'

export default function SavedGraphs({graphs, graphAction}) {
    return (
        <div>
             <ChartList graphAction={graphAction} graphs={graphs}/>
        </div>
    )
}
