import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Divider from '../Divider/Divider'

const HeaderLayout = () => {
  return (
    <div className="container">
        <Header />
        <Divider />
        <Outlet />
    </div>
  )
}

export default HeaderLayout