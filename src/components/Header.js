import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const cart = useSelector(state => state.cartData)
    console.log(cart)
    return (
        <div className="header">
            <Link to="/"><h1 className='logo'>E-COMM</h1></Link>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{cart.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Header;