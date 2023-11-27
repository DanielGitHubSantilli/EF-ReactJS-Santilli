import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div className='cartcontainer'>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }
    return (
        <div className='cartcontainer'>
            <div className='cart-item'>
                {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item} 
                    quantity={item.quantity} 
                    removeItem={removeItem} 
                />
            ))}
            </div>
            
            <h3 className='totalAmount'>Total: ${total}</h3>
            <div className='cartButton'>
                <button onClick={() => clearCart()} className='Option'>Vaciar Carrito</button>
                <Link to='/Checkout' className='Option'>Checkout</Link>
            </div>
            
        </div>
    )
}

export default Cart