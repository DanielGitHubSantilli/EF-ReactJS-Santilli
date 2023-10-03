const products =[
  {
    id:'1',
    name:'Detergente',
    precio: "900",
    img:"/assets/cif.svg",
    category: 'Limpiadores Líquidos',
    stock:300,
    descripcion: 'Detergente 1000 cm3'
  },
  {
    id:'2',
    name:'Lavandina',
    precio: "700",
    img:"/assets/lavandinaAyudin.svg",
    category: 'Limpiadores Líquidos',
    stock:300,
    descripcion: 'Lavandina 1000 cm3'
  }
]
export const getProducts =()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    }, 500)
  })
}

export const getProductById =(productId)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
};

export const getProductsByCategory =(ProductsByCategory)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products.find(prod => prod.category === ProductsByCategory))
    }, 500)
  })
};
 