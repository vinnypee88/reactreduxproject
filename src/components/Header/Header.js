import React from 'react'
import './Header.css'
import reddit from './reddit.svg'

class Header extends React.Component {
    
    render() {
        return (
            <div className="Header">
                <h1 class='header-item'>Fluffless Reddit</h1>
                
                <img src={reddit} alt='logo'
                class='header-item'></img>
                <div class='header-item'>
                <input placeholder="Search"
                />
                <button className="SearchButton">Search
                </button>
                </div>
            </div>
        )
    }
}
export default Header

