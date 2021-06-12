import React, { useState } from 'react'
import './Header.css'
import reddit from './reddit.svg'
import { filterSearch } from '../../features/popularPost/popularPostSlice'
import { useDispatch } from "react-redux";

function Header () {

 
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    function handleTermChange (e) {
        setSearch(e.target.value)
    }

    const clickSearch =()=>{
           dispatch(filterSearch(search))
    }
    
        return (
            <div className="Header">
               
                <div className='headerlogo'>
                <img className='logo' src={reddit} alt='logo'/> 
                <h1 >Fluffless Reddit</h1>
                </div>
               
                <div className="SearchButton">
                <input placeholder="Search" onChange={handleTermChange}/>
                <button onClick={clickSearch}>Search
                </button>
                </div>
               
            </div>
        )
    }

export default Header

