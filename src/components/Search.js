import React from 'react'
import icon from '../images/Path 917.svg'
import search from '../images/Ellipse 1.svg'
import line from '../images/Line 14.png'

const Search = () => {
  return (
    <div className='search'>
      <div className='innersearch'>
      <img src={icon} className='icon2'/>
        <p className='details1'>
        Start Saving Today!
        </p>
        <p className='details2'>Find the best electrification upgrades for your home</p><hr className='hrr'/>
        <div className='innerinput'>
          <img src={search} className='microscope'/><img src={line} className='line'/>
        <input type='text' placeholder='Select an address to begin ' className='input'/>
       
        <button className='btn2'>Search</button>
        </div>
        </div>
    </div>
  )
}

export default Search