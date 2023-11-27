import { createContext, UseState } from "react";

export const cartContext = createContext()

export const cartProvider = ({children}) =>{
  const [cart,setCart]= UseState([])

  const addItem =(item,quantity)=>{
    if(isInCart(item.id)){
      setCart(cart.map((product)=>{
        if(product.id===item.id){
          return {...product, quantity: product.quantity + quantity}
        }else{
          return product
        }
      }))
    }else{
      setCart(...cart,{...item,quantity})
    }
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((item)=> item.id === id)
  }

const deleteItem =(id) => {
  setCart(cart.filter((item)=>item.id !== id))
}

const cartQuantity = () => {
  return cart.reduce((acc,item)=> acc + item.quantity, 0)
}

const total = () => {
  return cart.reduce((acc,item)=> acc + item.quantity*item.precio, 0)
}

  return(
    <cartContext.Provider value ={{cart, addItem, clear, deleteItem, cartQuantity,total}}>
        {children}
    </cartContext.Provider>
  )
}

export default cartContext;