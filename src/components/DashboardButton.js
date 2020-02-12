import React from 'react'
import {Link} from "react-router-dom";
export default function Dashboard() {
    return (
        <div>
            <Link to="/dashboard">
                <button className="browseButton">Dashboard</button>
            </Link>
        </div>
    )
}
