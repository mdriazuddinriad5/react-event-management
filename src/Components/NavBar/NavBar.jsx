import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li><NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
        }>Home</NavLink></li>
        <li><NavLink to={'/gallery'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
        }>Gallery</NavLink></li>

        {
            user && <li><NavLink to={'/shop'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }>Shopping Cart</NavLink></li>
        }

        <li><NavLink to={'/about'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
        }>About</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 w-5/6 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn hidden md:inline-flex btn-ghost normal-case text-xl">Event<span className="text-[#008080]">Elegance</span></a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end hidden lg:inline-flex">

                {
                    user ? <>

                        <p className="mr-2 text-blue-400 font-bold ">{user.displayName}</p>
                        <img className="w-8 rounded-full mr-2" src={user.photoURL} />

                        <a onClick={handleLogOut} href=""><button className="btn btn-sm">Sign Out</button></a>
                    </> :
                        <Link to={'/login'}>
                            <button className="btn btn-sm">Login</button>
                        </Link>
                }
            </div>

            <div className="lg:hidden">
                {
                    user ? <>

                            <p className="mr-2 text-blue-400 font-bold ">{user.displayName}</p>
                            <img className="w-8 rounded-full mr-2" src={user.photoURL} />

                            <a onClick={handleLogOut} href=""><button className="btn btn-sm">Sign Out</button></a>
                    


                    </> :
                        <Link to={'/login'}>
                            <button className="btn btn-sm">Login</button>
                        </Link>
                }
            </div>


        </div>
    );
};

export default NavBar;