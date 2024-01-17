import React, { useEffect, useState } from 'react'
import Product from '../../components/PRODUCT/product'
import './products.css'
import { getAllProducts } from '../../services/productos/productos';
const Products = () => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getProductos = () => {
    getAllProducts(currentPage, 6)
      .then((res) => {
        console.log(res);
        setProductos(res.data.results);
        // console.log(res.data.results);
        // setTotalResults(res.data.total);

        // Calcular el número de páginas y redondear hacia arriba
        const countPages = Math.ceil(res.data.total / 10);

        // setPages(countPages);
        console.log(res.data.results.length);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="prodS">
      {productos && productos.length > 0 && productos.map((productoInfo) => (
        <Product key={productoInfo.id} product={productoInfo} />
      ))}
    </div>

  )
}

export default Products