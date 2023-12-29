// app.js
import express from 'express';
import connection from './dbconfig.js';
import cors from 'cors'; // Importa la librería cors
// import { dataStore } from '../data/dataStore.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Obtener todos los productos con paginación y contar el total
// Obtener todos los productos con paginación y contar el total

app.get('/productos', (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const offset = (page - 1) * pageSize;

  const query = `
    SELECT * FROM productos LIMIT ${parseInt(pageSize)} OFFSET ${offset};
    SELECT COUNT(*) as total FROM productos;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      const paginatedResults = results[0];
      const total = results[1][0].total;

      res.json({ results: paginatedResults, total });
    }
  });
});



// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const productId = req.params.id;
  connection.query('SELECT * FROM productos WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else if (results.length === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.json(results[0]);
    }
  });
});

// Crear un nuevo producto
app.post('/productos', (req, res) => {
  const newProduct = req.body;

  connection.query('INSERT INTO productos SET ?', [newProduct], (err, results) => {
    if (err) {
      console.error('Error al crear el producto:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json({ id: results.insertId, ...newProduct });
    }
  });
});

// Actualizar un producto por ID
app.put('/productos/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  connection.query('UPDATE productos SET ? WHERE id = ?', [updatedProduct, productId], (err) => {
    if (err) {
      console.error('Error al actualizar el producto:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json({ id: productId, ...updatedProduct });
    }
  });
});

// Eliminar un producto por ID
app.delete('/productos/:id', (req, res) => {
  const productId = req.params.id;

  connection.query('DELETE FROM productos WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      res.status(500).send('Error en el servidor');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Producto no encontrado');
    } else {
      res.status(204).send(); // No hay contenido en la respuesta (éxito sin datos)
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

export default app;
