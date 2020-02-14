import React from 'react'
import Chart from './Chart'

export default function ImpactGraph({user, user_graphs}) {
 
   const xs = user_graphs.map(graph=>graph.name)
   const ys = user_graphs.map(graph=> 1 - Math.random(0.8)) 
   ys.unshift(1)
   xs.unshift(0)

    return (
        <div>
            <Chart name={`${user.name}'s impact chart`} xs={xs} ys={ys}/>
        </div>
    )
}
