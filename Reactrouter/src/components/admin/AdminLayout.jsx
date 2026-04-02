import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
        <h2>admin layout</h2>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
