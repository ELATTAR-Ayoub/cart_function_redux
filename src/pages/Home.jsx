import React, { useState } from 'react';

import styles from '../styles';
import { Link } from "react-router-dom";
import hoodies from '../hoodies.json';

// 
import Hero from '../sections/Hero';
import Card from '../Components/card';


const Home = () => {

    const [limit] = useState(3);

    return (
        <div className={`${styles.flexCenter} flex-col mb-16`}>
            <Hero />
            <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col text-primary-black p-8 m-4`}>
                <h1 className={`${styles.h1Section} text-center mb-8`}>Latest Products</h1>
                <div className={`${styles.flexStart} w-full gap-4 flex-wrap`}>
                    {hoodies.slice(0, limit).map(hoodie => (
                        <Card key={hoodie.id} hoodie={hoodie} />
                    ))}
                </div>
            </div>
            <Link to="/products" >
                <button className='Button-P rounded-lg text-sm '>
                    See our collection
                </button> 
            </Link>
        </div>
    );
};

export default Home;