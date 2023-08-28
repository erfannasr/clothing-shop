import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';

import { CartContext } from '../Contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//image
import Logo from '../img/logo.svg'
const Header = () => {
    const [isActive ,setActive] = useState(false)
    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { itemAmount } = useContext(CartContext)
    //event listiner
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        window.scrollY > 60 ? setActive(true) : setActive(false)
       })
    },[])
    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6' } fixed w-full z-10`}>
            <div className='flex container mx-auto items-center justify-around  h-full transition-all duration-700'>
                <Link to={'/'}>
                    <div>
                        <img className='w-[40px]' src={Logo} />
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
                </div>

            </div>

        </header>
    );
};

export default Header;