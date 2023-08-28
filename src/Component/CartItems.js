import React, { useContext } from 'react';
//imprt links
import { Link } from 'react-router-dom';
// Icons
// import context cart
import { CartContext } from '../Contexts/CartContext'; 
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
const CartItems = ({ item }) => {
    //destratre
    const { id, title, image, price, amount } = item
    const {removeFromCart ,increaseAmount ,decreaseAmount}= useContext(CartContext)
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border border-gray-200 w-full font-light text-gray-500'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>{title}</Link>
                        {/* remove icon */}
                        <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'><IoMdClose className='text-gray-500 hover:text-red-500 transition' /></div>
                    </div>
                    <div className=' flex gap-x-2 h-[36px] text-sm'>
                        {/* qty */}
                        <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>

                            <div onClick={()=>decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer  '><IoMdRemove  /></div>
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                            {/* plus */}
                            <div onClick={()=>increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd /></div>

                        </div>
                        {/* item price */}
                        <div className='flex-1 flex items-center justify-around'>$ {price}</div>
                        {/* final price */}
                        <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;