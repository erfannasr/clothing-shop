import React, { useContext } from 'react';
//import links
import { Link } from 'react-router-dom';
// iCons
import { BsPlus, BsEyeFill } from 'react-icons/bs'
//import cart context
import { CartContext } from '../Contexts/CartContext';
const Products = ({ product }) => {
   const {addToCart}= useContext(CartContext)
    //destrature poroducts
    const { id, title, price, category, image } = product;
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition '>
                <div className='w-full h-full flex justify-center items-center '>
                    <div className=' w-[200px] mx-auto flex justify-center items-center'>
                        <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' />
                    </div>
                </div>

                {/* buttons */}
                <div className='absolute top-6 right-11 group-hover:right-3 bg-red-600/40 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button onClick={()=> addToCart(product,id)}>
                        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'><BsPlus className='text-3xl' /></div>
                    </button>
                    <Link to={`/product/${id}`}
                        className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                        <BsEyeFill />
                    </Link>
                </div>
            </div>

            {/* category & title & price */}

            <div>
                <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1 '>{title}</h2>
                </Link>
                <h2 className='font-semibold text-green-500'>$ {price}</h2>

            </div>
        </div>
    );
};

export default Products;