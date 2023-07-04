import React from 'react'
import { Outlet } from 'react-router-dom'

const Event = () => {
  return (
    <div className='event'>
        <h2>오늘의 이벤트</h2>
        <Outlet />
    </div>
  )
}

export default Event