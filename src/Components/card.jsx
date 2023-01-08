import React from 'react';

// redux
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../actions/cartAction";


const Card = ({ hoodie }) => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("store", state);

    const handleAddToCart = () => {
        console.log('Adding hoodie to cart:', hoodie);
        dispatch(addItem(hoodie));
        console.log(state.items);
    };
    
    return (
        <div className={` rounded-xl flex justify-end items-start flex-col gap-2 w-[32%] max-h-[680px] p-3 black-border-10 Card`}>
            <div className='rounded-lg w-full h-full overflow-hidden '>
                <img className='w-full h-full' src={hoodie.imgSrc} alt={hoodie.title} />
            </div>
            <p className={`  font-bold text-primary-black text-sm `}>{hoodie.title}</p>
            <p className={`  font-bold text-primary-black text-xl`}>{hoodie.price} MAD</p>
            <button onClick={handleAddToCart} className='Button-P rounded-lg mt-2 text-sm w-full'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 18.5C16.39 18.5 15.5 19.39 15.5 20.5C15.5 21.0304 15.7107 21.5391 16.0858 21.9142C16.4609 22.2893 16.9696 22.5 17.5 22.5C18.0304 22.5 18.5391 22.2893 18.9142 21.9142C19.2893 21.5391 19.5 21.0304 19.5 20.5C19.5 19.9696 19.2893 19.4609 18.9142 19.0858C18.5391 18.7107 18.0304 18.5 17.5 18.5ZM1.5 2.5V4.5H3.5L7.1 12.09L5.74 14.54C5.59 14.82 5.5 15.15 5.5 15.5C5.5 16.0304 5.71071 16.5391 6.08579 16.9142C6.46086 17.2893 6.96957 17.5 7.5 17.5H19.5V15.5H7.92C7.8537 15.5 7.79011 15.4737 7.74322 15.4268C7.69634 15.3799 7.67 15.3163 7.67 15.25C7.67 15.2 7.68 15.16 7.7 15.13L8.6 13.5H16.05C16.8 13.5 17.46 13.08 17.8 12.47L21.38 6C21.45 5.84 21.5 5.67 21.5 5.5C21.5 5.23478 21.3946 4.98043 21.2071 4.79289C21.0196 4.60536 20.7652 4.5 20.5 4.5H5.71L4.77 2.5M7.5 18.5C6.39 18.5 5.5 19.39 5.5 20.5C5.5 21.0304 5.71071 21.5391 6.08579 21.9142C6.46086 22.2893 6.96957 22.5 7.5 22.5C8.03043 22.5 8.53914 22.2893 8.91421 21.9142C9.28929 21.5391 9.5 21.0304 9.5 20.5C9.5 19.9696 9.28929 19.4609 8.91421 19.0858C8.53914 18.7107 8.03043 18.5 7.5 18.5Z" fill="white"/>
                </svg>
                Add to cart
            </button> 
        </div>
    );
};

export default Card;