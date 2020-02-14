import React from 'react'
import ChartList from './ChartList'

export default function Browse({graphs, graphAction}) {

    
    return (
        <div className='browseBodyDiv'>
            <h2>Browse</h2>
            <ChartList graphAction={graphAction} graphs={graphs}/>
        </div>
    )
}
