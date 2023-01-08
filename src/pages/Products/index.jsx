import React, { useState } from 'react';

import styles from '../../styles';
import { Link } from "react-router-dom";
import hoodies from '../../hoodies.json';

// 
import Card from '../../Components/card';

const Products = () => {

    const [limit, setLimit] = useState(6);

    const handleSeeMore = () => {
        setLimit(limit + 3);
    };

    return (
        <div className={`${styles.flexCenter} flex-col mb-16`}>

            <dir className={`${styles.flexCenter} ${styles.innerWidth} text-secondary-white p-8 m-4`}>

                <Link to="/products/men" className={`${styles.flexStart} w-1/2 h-[130px] bg-primary-black Card cursor-pointer`}>
                    <div className={`${styles.flexCenter} w-1/3 h-full overflow-hidden`}>
                        <img className=' w-full' src="https://images.unsplash.com/photo-1542142430-6c91a7c123b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwaG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="a guy" />
                    </div>
                    
                    <div className={`${styles.flexStart} flex-col p-8`}>
                        <h2 className={`${styles.h2Section} flex-col`}>Shop men’s hoodies</h2>
                        <p className=' opacity-90'>Discover the latest trends in men’s hoodies</p>
                    </div>
                </Link>

                <Link to="/products/women" className={`${styles.flexStart} w-1/2 h-[130px] bg-primary-color Card cursor-pointer`}>
                    <div className={`${styles.flexCenter} w-1/3 h-full overflow-hidden`}>
                        <img className=' w-full' src="https://images.unsplash.com/photo-1552663651-2e4250e6c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="a guy" />
                    </div>
                    
                    <div className={`${styles.flexStart} flex-col p-8`}>
                        <h2 className={`${styles.h2Section} flex-col`}>Shop women’s hoodies</h2>
                        <p className=' opacity-90'>Discover the latest trends in wpmen’s hoodies</p>
                    </div>
                </Link>
            </dir>
            

            <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col text-primary-black p-8 m-4`}>
                <h1 className={`${styles.h1Section} text-center mb-8`}>All Products</h1>
                <div className={`${styles.flexBetween} w-full gap-4 flex-wrap `}>
                    {hoodies.slice(0, limit).map(hoodie => (
                        <Card key={hoodie.id} hoodie={hoodie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;