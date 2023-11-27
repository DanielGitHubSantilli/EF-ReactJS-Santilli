import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cartContext';
const ItemDetail = ({id, name, img, price, category, stock, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useCart();
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
            id, name, price
        };
        addItem(item, quantity);
    }
    return (
        <article className='CardItemDetail'>
            <header className='Header'> 
            </header>
            <picture>
                <img src={img} className='ItemImg2' alt={name} />
            </picture>
            <section className='Info-details'>
                <h2 className='ItemHeaderb'>{name}</h2>
                <p className='Infob'>Precio: ${price}</p>
                <p className='Infob'>Stock disponible: {stock}</p>
                <p className='Infob'>Descripción: {description}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : ( 
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                <Link to='/' className='Option'>Seguir Comprando</Link>
            </footer>
        </article>
    );
}

export default ItemDetail;