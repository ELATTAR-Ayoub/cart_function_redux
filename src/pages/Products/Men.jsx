import React, { useState } from 'react';

import styles from '../../styles';
import hoodies from '../../hoodies.json';

// 
import Card from '../../Components/card';

const Men = () => {

    const [limit] = useState(6);
    const menHoodies = hoodies.filter(hoodie => hoodie.genre === 'men');

    return (
        <div className={`${styles.flexCenter} flex-col mb-16`}>
            <div className={`${styles.innerWidth} ${styles.flexCenter} flex-col text-primary-black p-8 m-4`}>
                <h1 className={`${styles.h1Section} text-center mb-4`}>Men’s hoodie</h1>
                <p className={` text-center mb-8`}>Discover the latest trends in men’s hoodies</p>
                <div className={`${styles.flexBetween} w-full gap-4 flex-wrap `}>
                    {menHoodies.slice(0, limit).map(hoodie => (
                        <Card key={hoodie.id} hoodie={hoodie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Men;