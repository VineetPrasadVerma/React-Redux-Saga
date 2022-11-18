import { useSelector } from 'react-redux'

const Header = () => {
    const cart = useSelector(state => state.cartData)
    console.log(cart)
    return (
        <div className="header">
            <div className="cart-div">
                <span>{cart.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
        </div>
    )
}

export default Header;