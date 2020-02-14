import React from 'react'

export default function({logout}) {

    const dologout = () => {        
        logout()
    }

    return (
        <div className='logoutdiv'>
            <button  onClick={dologout}>Log out</button>
        </div>
    )
}
