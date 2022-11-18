import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../redux/productAction';
import { useEffect } from 'react';


function Main() {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productData);
    console.log("Data in main component", productData)
    // const product = {
    //     name: 'i Phone',
    //     category: 'mobile',
    //     price: 10000,
    //     color: 'red'
    // }

    useEffect(() => {
        dispatch(getProductList())
    }, [])
    return (
        <div className='app'>
            {/* <div>
                <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button>
            </div> */}
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
            {/* <div>
                <button onClick={() => dispatch(getProductList())}>Product List</button>
            </div> */}

            <div className='product-container'>
                {
                    productData.map((item) => <div className='product-item' key={item.id}>
                        <img src={item.photo} alt="" />
                        <div>Name : {item.name} </div>
                        <div>Color : {item.color} </div>
                        <div>Price : {item.price} </div>
                        <div>Category : {item.category} </div>
                        <div>Brand : {item.brand} </div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Main;