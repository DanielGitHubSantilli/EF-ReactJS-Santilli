import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import 'bulma/css/bulma.css/';
//import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* rutas de la aplicación */}
          <Route path ='/'element={<ItemListContainer />} />
          {/* línea de arriba: ruta que muestra todos los productos */}
          <Route path ='/category/:categoryId' element={<ItemListContainer />} />
          {/* línea de arriba: ruta que muestra los productos por categporía*/}
          <Route path ='/item/:itemId' element={<ItemDetailContainer />} />
          {/* línea de arriba: ruta que muestra todos los detalles de los productos */}
          <Route path ='*' element={<h1>404 NOT FOUND</h1>} />
           {/* línea de arriba: ruta que muestra el cartel 404 en caso de no coincidir ninguna de las rutas atneriores*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
