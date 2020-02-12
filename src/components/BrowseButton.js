import React from 'react'
import {Link} from "react-router-dom";
export default function BrowseButton() {
    return (
        <div className='BrowseButton-div'>
             <Link to="/browse">
                <button className="browseButton">Browse Graphs</button>
            </Link>
        </div>
    )
}
