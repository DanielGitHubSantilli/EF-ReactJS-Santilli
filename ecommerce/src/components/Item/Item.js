import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import './Item.css'
import { storage } from "../../services/firebase/firebaseConfig"
const Item = ({ id, name, img, price, stock, description }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const getImageUrl = async (imageName) => {
    const storageRef = ref(storage, `${imageName}`);
    try {
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setImageLoaded(true);
    } catch (error) {
      console.error('Error al obtener la URL de la imagen: ', error);
    }
  };
  useEffect(() => {
    if (!imageLoaded && img) {
      getImageUrl(img);
    }
  }, [img, imageLoaded]);
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        {imageUrl ? (
          <img src={imageUrl} className='ItemImg' alt={name} />
        ) : (
          <p>Cargando imagen...</p>
        )}
      </picture>
      <section>
        <p className='Info2'>Precio: {Item.price}</p>
        <p className='Info'>Stock disponible: {stock}</p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} className='Option'>
          Ver Detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;