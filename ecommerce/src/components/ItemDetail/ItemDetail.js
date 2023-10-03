import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail =({id,name,img,category,descripcion,precio,stock})=>{
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
          Categoría: {category}
        </p>
        <p className="info">
          Descripción: {descripcion}
        </p>
        <p className="info">
          Precio: ${precio}
        </p>
        <p className="info">
          stock: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log("Cantidad agregada: ", quantity)}/>
      </footer>
    </article>
  )
} 

export default ItemDetail;
