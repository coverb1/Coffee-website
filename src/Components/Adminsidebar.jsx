import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const AdminSidebar = () => {
  return (
    <div className="w-64 p-4 border-r flex flex-col gap-3">
      <div className="flex flex-col gap-4 pt-6 ] text-[15px ]">
        <NavLink to="/admin/add" className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 rounded-lg'>
          <img src={assets.add} alt="" className="w-6" />
          <p>Add</p>
        </NavLink>

        <NavLink to="/admin/list" className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 rounded-lg'>
          <img src={assets.files} alt="" className="w-6" />
          <p>List item</p>
        </NavLink>

        <NavLink to="/admin/Order" className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 rounded-lg'>
          <img src={assets.order} alt="" className="w-6" />
          <p>Add</p>
        </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebar
