import React, { useEffect, useState } from 'react';
import './product.css';
import img1 from "../../assets/imgs/bannerimg/S2.jpg";
import img2 from "../../assets/imgs/bannerimg/S1.jpg";

const Product = ({ product }) => {
  const [precio, setPrecio] = useState();

  useEffect(() => {
    // Convierte la cadena a un número (puede ser parseFloat o parseInt según tus necesidades)
    const precioNumerico = parseFloat(product.precio);

    // Verifica si la conversión fue exitosa y si es un número válido
    if (!isNaN(precioNumerico)) {
      const precioFormateado = precioNumerico.toLocaleString('es-ES');
      console.log(`<h4>${precioFormateado}</h4>`);
      setPrecio(precioFormateado);
    } else {
      console.error("El valor de precio no es un número válido.");
    }
  }, [product.precio]);

  const baseUrlImagen = `/public`;

  return (
    <div className='prod'>
      <div className="sect">
        <div className="pimg">
          <img src={`${baseUrlImagen}/${product.imagenRuta}`} alt={product.imagenRuta} />
        </div>
        <div className="ptext">
          <div className="text1">
            <h3>{product.nombre}</h3>
            <h4>{product.coleccion}</h4>
            <h4>${precio}</h4>
          </div>
          <div className="text2">
            <a href="#">+</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
