import React from 'react'
import './Header.css'
import reddit from './reddit.svg'

class Header extends React.Component {
    
    render() {
        return (
            <div className="Header">
               
                <div className='headerlogo'>
                <img src={reddit} alt='logo'/> 
                <h1 >Fluffless Reddit</h1>
                </div>
               
                <div className="SearchButton">
                <input placeholder="Search"
                />
                <button >Search
                </button>
                </div>
               
            </div>
        )
    }
}
export default Header

