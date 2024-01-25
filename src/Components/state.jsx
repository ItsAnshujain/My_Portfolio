import React from 'react'
import {stats} from '../data'
const state = () => {
  return (
    <>
      {stats.map(({no, title}, index)=>{
        return(
          <div className="stats_box" key={index}>
            <h3 className="stats_no">{no}</h3>
            <p className="stats_title">{title}</p>
          </div>
        )
      })}
    </>
  )
}

export default state
