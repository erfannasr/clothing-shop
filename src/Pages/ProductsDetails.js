import React, { useContext } from 'react';
//imprt useParams
import { useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../Contexts/CartContext'
//imprt products Context
import { ProductContext } from '../Contexts/ProductsContext'
//imprt Gif
import Gif from '../Gif/Spinner-0.9s-203px.gif'

const ProductsDetails = () => {
    // get the prouct id from the url
    const { id } = useParams()
    const  products  = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)
    console.log(products)

    // get the single products based on the id
    const product = products.find((item)=>{
        return item.id === parseInt(id);
    })



    //if products is nor found
    if (!product) {
        return (
            <section className=' flex justify-center items-center'>
                <div>
                    <h1>loading...</h1>
                    <img src={Gif}/>
                </div>
            </section>
        )
    }

    //  destructure Products
    const { image,price , description ,title  } = product;
    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
            <div className='container mx-auto'>
                {/* img & text wrapper */}
                <div className='flex flex-col lg:flex-row items-center'>
                    {/* image */}
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
                        <img src={image} className='max-w-[200px] lg:max-w-sm'/>
                    </div>
                    {/* text */}
                    <div className='flex-1 items-center lg:text-left'>
                       <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'> {title}</h1> 
                       <div className=' text-green-400  text-lg mb-6'>$ {price}</div>
                       <p className='mb-8'>{description}</p>
                       <button onClick={()=> addToCart(id)} className= ' rounded-2xl bg-primary py-4 px-8 text-white'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsDetails;