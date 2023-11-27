import './ItemList.css'

import Item from '../Item/Item'
const ItemList = ({products}) => {
    return(
        <div className= 'dflex justify-content-around align-items-center flex-wrap ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} /> )}
        </div>

    )

}
export default ItemList 