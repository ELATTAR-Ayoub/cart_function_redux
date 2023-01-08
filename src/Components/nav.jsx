import React, { useState } from "react";
import styles from '../styles';
import { Link, NavLink } from "react-router-dom";

import Logo from './Logo';

// redux
import { useSelector } from "react-redux";

const Nav = () => {
    const state = useSelector((state) => state);
    const [isVisible, setIsVisible] = useState(false);

    const ToggleCart = () => {
        const element = document.getElementById("cart_log");
        if (isVisible) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
        setIsVisible(!isVisible);
    };
    
    return (
        <div className={`${styles.innerWidth} nav mx-auto flex justify-between items-center gap-8 p-4 text-primary-black font-bold`}>
            <Link to="/" className="cursor-pointer"><Logo /></Link>


            <ul className="list-none flex gap-4 justify-center  ">
                <li className="cursor-pointer">
                    <NavLink  to="/" className="cursor-pointer" activeClassName="text-primary-color">Home</NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink  to="/products" className="cursor-pointer" activeClassName="text-primary-color">Products</NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink  to="/products/men" className="cursor-pointer" activeClassName="text-primary-color">Men</NavLink>
                </li>
                <li className="cursor-pointer">
                    <NavLink  to="/products/women" className="cursor-pointer" activeClassName="text-primary-color">Women</NavLink>
                </li>
            </ul>

            <div onClick={ToggleCart} className='relative flex justify-center items-center gap-4 cart cursor-pointer'>
                {state.items.length === 0 ? null :
                <div className={`${styles.flexCenter} bg-primary-color text-secondary-white rounded-full w-8 h-8 absolute left-0 bottom-2 scale-50`}>
                    {state.items.length}
                </div>}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#121212"/>
                </svg>
                Shopping cart
            </div>
        </div>
    );
};

export default Nav;