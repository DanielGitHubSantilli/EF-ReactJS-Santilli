import '../Item/Item.css';
import {Link} from "react-router-dom"

const Item =({id,name,img,precio,stock})=>{
  return(
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg"/>        
      </picture>
      <section>
        <p className="info">
          Precio: ${precio}
        </p>
        <p className="info">
          Stock Disponible: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
      <Link to={`/item/${id}`} className='Option'> Ver detalle</Link>
      </footer>
    </article>
  )
} 

export default Item;