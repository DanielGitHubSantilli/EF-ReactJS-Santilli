import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
//en el último video no importa checkout, react y CartProvider
import CheckOut from './components/CheckOut/CheckOut';
import React from 'react';
import { CartProvider } from './context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
export const CartContext = React.createContext('');
console.log ("CartContext: ",CartContext)

function App() {
  const greeting = "Bienvenidos a CAIDIM"
  return (
    <div className="App">
      
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <ItemListContainer greeting={greeting}/>
            <Routes>
              {/* rutas de la aplicación */}
              <Route path ='/'element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
              {/* línea de arriba: ruta que muestra todos los productos */}
              <Route path ='/category/:categoryId' element={<ItemListContainer greeting='Productos por categoría: ' />} />
              {/* línea de arriba: ruta que muestra los productos por categporía*/}
              <Route path ='/item/:itemId' element={<ItemDetailContainer />} />
              {/* línea de arriba: ruta que muestra todos los detalles de los productos */}
              {/* De acá para abajo no están en el video... */}
              <Route path ='/cart' element={<Cart/>} /> 
              {/* línea de arriba: ruta que muestra el componente correspondiente*/}
               <Route path ='/CheckOut' element={<CheckOut />} /> 
              {/* línea de arriba: ruta que muestra el componente correspondiente*/}
              {/* <Route path ='*' element={<h1>404 NOT FOUND</h1>} /> */}
              {/* línea de arriba: ruta que muestra el cartel 404 en caso de no coincidir ninguna de las rutas anteriores*/}
            </Routes>
          </BrowserRouter>
        </CartProvider>
     
    </div>
  );
}

export default App;
