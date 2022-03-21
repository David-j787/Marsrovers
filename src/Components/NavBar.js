import React from 'react';


export default function NavBar({rover}){
    

    return(
        <div className='all_navBar'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href='/'>Mars Photos</a>
                <a className="navbar-brand">{rover}</a>
            </nav>
        </div>
    )
}
