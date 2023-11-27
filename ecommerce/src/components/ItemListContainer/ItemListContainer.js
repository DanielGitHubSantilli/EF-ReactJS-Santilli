import React,{ useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
//En el video está: import { getProducts } from '../../Mock/data';
import { getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom';

// import{getDocs, collection, query, where} from 'firebase/firestore';
// import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    getProducts()
    .then((res)=> {
      if (categoryId){
        setProducts(res.filter((item)=>item.categoryId === categoryId))//filter no sale solo. 
      }else{
        setProducts(res)
      }
    })
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false))
  }, [categoryId])
//   return(
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products}/>
//     </div>
//   )
// }
    return(
      <div>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList products={products}/>}
      </div>
    )
}
export default ItemListContainer;

