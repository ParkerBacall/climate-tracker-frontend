import React from 'react'
import cogoToast from 'cogo-toast';


export default function({logout}) {

    const dologout = () => {        
        logout()
        cogoToast.success("Logged out")
    }

    return (
        <div className='logoutdiv'>
            <button  onClick={dologout}>Log out</button>
        </div>
    )
}
