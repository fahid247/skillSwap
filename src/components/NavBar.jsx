import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/Untitled.jpg"
import { FaUserCircle } from "react-icons/fa";
import "../app.css"


const Navbar = () => {
    const links = <>
        <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/myProfile"}>My Profile</NavLink>
            </li>
    </>
  return (
    <div className="navbar bg-[#9BB4C0] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-blue-50 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <div className=" flex items-center gap-2 font-bold text-xl text-[min(4vw,20px)] text-[#703B3B] "><img className="h-7 w-7 rounded-2xl" src={logo} alt="" /><Link to={"/"}>SkillSwap</Link></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <FaUserCircle size={24}></FaUserCircle>
        <Link to={"/login"} className="btn bg-[#703B3B] border-none text-[min(3vw,14px)]">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
