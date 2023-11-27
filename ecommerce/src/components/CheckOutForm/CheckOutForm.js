import './CheckOutForm.css';
import { useState } from 'react';

const CheckOutForm =({ onConfirm }) => {
  const [name, setName] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name,telefono,email
    }
  
  onConfirm(userData)

}

return(
  <div className='Container'>
    <form onSubmit={handleConfirm} className='Form'>
      <label className='Label'>
        Nombre
        <input
        className='input'
        type='text'
        value={name}
        onChange={({ target })=> setName(target.value)}
        />
      </label>
      <label className='Label'>
        Teléfono
        <input
        className='input'
        type='text'
        value={telefono}
        onChange={({ target })=>setTelefono(target.value)}
        />
      </label>
      <label className='Label'>
        email
        <input
        className='input'
        type='email'
        value={email}
        onChange={({target}) => setEmail(target.value)}
        />
      </label>
      <div className='Label'>
        <button type='submit' className='Button'>Crear orden</button>
      </div>
    </form>

  </div>
)

}
export default CheckOutForm;

