import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const AdminSidebar = () => {
  return (
    <div className="w-64 p-4 border-r flex flex-col gap-3">

      <NavLink to="/admin/add">
        <img src={assets.add} alt="" className="w-20" />
      </NavLink>
    </div>
  )
}

export default AdminSidebar
