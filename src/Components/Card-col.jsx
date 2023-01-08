import React, { useEffect, useState } from 'react';
import styles from '../styles';

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";


const Card = ({ hoodie }) => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("store", state);

    const handleAddToCart = () => {
        console.log('Adding hoodie to cart:', hoodie);
        dispatch(addItem(hoodie));
        console.log(state.items);
    };

    const handleRemoveFromCart = () => {
        dispatch(deleteItem(hoodie));
    };

    const [, updateState] = useState();

    useEffect(() => {
        updateState({}); // Triggers a re-render
    }, [state.items]);

    const matchingItems = state.items.filter(item => item.id === hoodie.id);
    
    return (
        <div className={`relative rounded-xl flex justify-end items-start gap-2 w-full h-[135px] black-border-10 text-secondary-white `}>
            <div className='rounded-lg min-w-[100px] w-[100px] h-full overflow-hidden'>
                <img className='w-full h-full' src={hoodie.imgSrc} alt={hoodie.title} />
            </div>

            <div className={`${styles.flexBetween} flex-col gap-2 h-full`}>
                <div className={`${styles.flexBetween} flex-col gap-2`}>
                    <p className={`text-sm `}>{hoodie.title}</p>
                    <p className={`text-base`}>{hoodie.price} MAD</p>
                </div>

                <div className={`${styles.flexBetween} gap-2 border p-1 justify-self-end`}>
                    <button onClick={handleRemoveFromCart}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12.998H5V10.998H19V12.998Z" fill="#8E37FF"/>
                        </svg>
                    </button>

                    <p>{matchingItems.length}</p>

                    <button onClick={handleAddToCart}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#8E37FF"/>
                        </svg>
                    </button>
                </div>
            </div>

            
            
        </div>
    );
};

export default Card;