import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/destination'>Destination</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-bold'>    <Link onClick={handleLogOut}>Logout</Link></li>
                </>
                :
                <li className='font-bold'> <Link to="/login">Login</Link></li>
        }
    </>


    return (
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars></FaBars>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl text-orange-500">Travel Boss</Link>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                {
                    user?.uid ?
                        <Link className='btn text-xl' >{user?.displayName || 'user'}</Link>
                        :
                        <Link className='btn text-xl' ><FaUserAlt></FaUserAlt> </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;