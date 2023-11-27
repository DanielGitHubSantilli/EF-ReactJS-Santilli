const Cif = "../../assets/Cif.svg";
const Ayudin = "../../assets/LavandinaAyudin.svg";
const Detergente = "../../assets/Detergente.svg";

const products =[
  {
    id:'1',
    name:'Detergente',
    precio: 900,
    category: 'Limpiadores Cremosos',
    stock:300,
    descripcion: 'Cif crema 1000 cm3',
    img: {'Cif': Cif},
  },
  {
    id:'2',
    name:'Lavandina',
    precio: 700,
    category: 'Limpiadores Líquidos',
    stock:300,
    descripcion: 'Lavandina 1000 cm3',
    img: {'Ayudin': Ayudin},
  },
  {
    id:'3',
    name:'Detergente',
    precio: 900,
    category: 'Limpiadores Cremosos',
    stock:300,
    descripcion: 'Detergente',
        img: {'Detergente': Detergente},
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
 