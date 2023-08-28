import React, { useContext } from 'react';

// import oriducts Context
import { ProductContext } from '../Contexts/ProductsContext';
// import Component
import Products from '../Component/Products';
import Hero from '../Component/Hero';

const Home = () => {
    //Get porducts from proudtcs Context 
    const products = useContext(ProductContext)


    // get only mens & women category
    const filteredProducts = products.filter(item => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    })

    return (
        <div>
            <Hero />
            <section className='py-16 '>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {
                            filteredProducts.map(product => {
                                return (
                                    <Products key={product.id} product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;