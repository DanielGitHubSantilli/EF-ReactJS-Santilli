import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to ='/'>
        <h3>CAIDIM - Productos de limpieza familiar e Industrial</h3>
      </Link>
      <div className='categories'>
        {/*Link para que salga el error 404*/}
        <NavLink to={`/celular`}className={({isActive})=> isActive ? 'ActiveOption':'Option'}>Celulares</NavLink>
        {/* botones para enlazar con los productos de limpieza */}
        <button>Limpieza Hogar</button>
        <button>Limpieza Industrial</button>
      </div>
      <CartWidget />
    </nav>
  )
}
export default NavBar;
