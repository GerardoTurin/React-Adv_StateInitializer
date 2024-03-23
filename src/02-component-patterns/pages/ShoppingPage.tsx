//import ProductCard from "../components/ProductCard";
//import { Product } from '../interfaces/prodInterfaces';
//import useShoppingCart from '../hooks/useShoppingCart';
import ProductCard, { ProductImage, ProductTitle, ProductsButtons } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/productsData';



const product = products[0];

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard 
                key={ product.id } 
                product={ product } 
                className='bg-dark text-white'
                initialValue={{ 
                    count: 5, 
                    maxCount: 15
                }}>
                    {
                        ( { reset, count, increaseBy, isMaxCountReached, maxCount } ) => (
                            <>
                                <ProductImage className='custom-image' />
                                <ProductTitle className='text-white' />
                                <ProductsButtons className='custom-buttons' />
                                <button onClick={ reset }>
                                    Reset
                                </button>

                                <button onClick={ () => increaseBy( -2 ) }>
                                    -2
                                </button>

                                <span style={{ margin: '0 10px', color: isMaxCountReached ? 'red' : 'white' }}>
                                    { count } / { maxCount }
                                </span>
                                
                                {
                                    ( !isMaxCountReached && <button onClick={ () => increaseBy( 2 ) }>+2</button> )
                                }

                            </>
                        )
                    
                    }
            </ProductCard>
        </div>
    )
};

export default ShoppingPage;