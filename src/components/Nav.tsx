import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div className='bg-white w-full h-12 flex items-center justify-center gap-8 font-bold cursor-pointer'>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/about'} >About</NavLink>
            <NavLink to={'/services'} >Services</NavLink>
            <NavLink to={'/profiles'} >Profiles</NavLink>
            <NavLink to={'/forms'} >Forms</NavLink>
            <NavLink to={'/contact'} >Contact</NavLink>
            <NavLink to={'/counter'} >Counter</NavLink>
            <button>Change</button>
        </div>
    )
}

export default Nav