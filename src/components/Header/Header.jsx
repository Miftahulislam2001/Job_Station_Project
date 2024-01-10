import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className="my-container navbar bg-base-300 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden px-3">
                        <Bars3CenterLeftIcon className="h-8 w-8 text-blue-500 font-bold" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/statistic">Statistics</ActiveLink></li>
                        <li><ActiveLink to="/appliedJob">Applied Job</ActiveLink></li>
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>

                    </ul>
                </div>
                <a className="text-2xl font-bold text-gray-700 font-serif md:ps-8">JobStation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-gray-700">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/statistic">Statistics</ActiveLink></li>
                        <li><ActiveLink to="/appliedJob">Applied Job</ActiveLink></li>
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Apply</a>
            </div>
        </div>
    );
};

export default Header;