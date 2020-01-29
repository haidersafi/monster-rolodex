import React from 'react';
import './search-box.css'

export const SearchBox=({placeHolder,handleChange})=>{
    return(<input className='search' type='search' placeholder={placeHolder} onChange={handleChange}/>)
}