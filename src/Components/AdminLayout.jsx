import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbaradmin from './Navbaradmin'
import AdminSidebar from './Adminsidebar'
const AdminLayout = () => {
    return (
        <div className='h-screen flex flex-col'>
            {/* topNavbar */}
            <Navbaradmin />

            {/* Body */}
            <div className='flex flex-1'>
                <AdminSidebar />

                {/* Right content */}
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout