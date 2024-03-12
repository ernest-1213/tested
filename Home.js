import React from 'react'
import './Homestyle.css'

import search_icon from '../src/Icon/Picture/search.png';


function Home() {
  return (
    <div className='pages' >
        <div className="top-bar">
          <input type="text" className="cityInput:" placeholder='search'/>
          <div className="search-icon">
            <img src={search_icon} alt=''/>
          </div>
        </div>
        
      <div className="container">
          <div className="weather">
            <div className="">

            </div>
          </div>
      </div>
    </div>
  )
}

export default Home