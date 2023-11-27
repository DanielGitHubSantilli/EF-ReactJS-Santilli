import { Timestamp } from "firebase/firestore"
import { writeBatch } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { getDocs } from "firebase/firestore"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import { documentId } from "firebase/firestore"
import { addDoc } from "firebase/firestore"

import { useContext, useState } from "react"
import {db} from "../../services/firebase/firebaseConfig"

import cartContext from "../cartContext/cartContext"

import CheckOutForm from '../CheckOutForm/CheckOutForm'

const CheckOut =()=> {
  const [ loading, setLoading ]=useState(false);
  const [ orderId, setOrderId ]=useState('');
  
  const { cart ,total, clearCart } = useContext(cartContext);
  
  const createOrder = async ({name,telefono,email}) =>{
    setLoading(true)

    try{
          const objOrder = {
            Comprador:{
              name,telefono,email
            },
            items:cart,
            total:total,
            date: Timestamp.formDate(new Date())
          }

        const batch = writeBatch(db)

        const outOfStock = []

       // const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in',)))//en el video sigue esta línea de código..

        const { docs } = productsAddedFromFirestore
        
        docs.forEach(doc=> { 
          const dataDoc = doc.data()
          const stockDb = dataDoc.stock

          const productsAddedToCart = cart.find(prod => prod.id === doc.id) 
          const prodQuantity = productsAddedToCart?.quantity 

          if (stockDb >= prodQuantity){ 
              batch.update(doc.ref, {stock: stockDb - prodQuantity})
          }else{
            outOfStock.push({id: doc.id,...dataDoc})
          } 
        })
      
      if(outOfStock.length === 0) {
          await batch.commit

          const orderRef = collection(db, 'orders')

          const orderAdded = await addDoc(orderRef,objOrder)

          setOrderId(orderAdded.id)
          clearCart() 
      } else {
        console.error('Hay productos que están fuera de stock')
      }

    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

  }
   
  if (loading){
    return <h1>Se está generando su orden...</h1>
  }

  if (orderId){
    return <h1>El ID de su orden es: {orderId}</h1>
  }

  return(
    <div>
      <h1>CheckOut</h1>
      <CheckOutForm onConfirm={createOrder}/>
    </div>
  )
}

export default CheckOut;