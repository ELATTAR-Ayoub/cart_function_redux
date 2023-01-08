import React from 'react';
import styles from '../styles';
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className=' relative overflow-hidden Heroimg p-12 px-48 w-screen'>
          <div className={`${styles.innerWidth} flex justify-center items-start flex-col gap-4 h-[500px] relative`}>
            <h1 className={`${styles.heroHeading} w-[500px]`}>Stay Warm and Stylish with Our Selection of Hoodies</h1>
            <p className={`${styles.herosubHeading} w-[500px]`}>Find the perfect hoodie for any occasion in our wide range of colors and styles.</p>
            <Link to="/products" className="cursor-pointer">
                <button className='Button-P rounded-lg mt-4'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0001 2.5C11.5001 2.5 11.0001 2.69 10.5901 3.09L7.29006 6.38L12.0001 11.08L16.7101 6.38L13.4101 3.09C13.0001 2.69 12.5001 2.5 12.0001 2.5ZM5.88006 7.79L2.59006 11.09C1.80006 11.87 1.80006 13.13 2.59006 13.91L5.88006 17.21L10.5801 12.5L5.88006 7.79ZM18.1201 7.79L13.4201 12.5L18.1201 17.21L21.4101 13.91C22.2001 13.13 22.2001 11.87 21.4101 11.09L18.1201 7.79ZM12.0001 13.92L7.29006 18.62L10.5901 21.91C11.3701 22.7 12.6301 22.7 13.4101 21.91L16.7101 18.62L12.0001 13.92Z" fill="white"/>
                    </svg>
                    See our collection
                </button> 
            </Link>
          </div>
        </div>
    );
};

export default Hero;