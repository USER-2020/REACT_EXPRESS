// app.js
import express from 'express';
import connection from './dbconfig.js';
import cors from 'cors'; // Importa la librería cors
// import { dataStore } from '../data/dataStore.js';

import multer from 'multer';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//middleWare Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Ruta del directorio de destino:', path.join(__dirname, '../../public/images/imgsProducts'));
    cb(null, path.join(__dirname, '../../public/images/imgsProducts'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Formato de archivo no permitido'));
    }
  }
});


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

// Crear un nuevo producto con imagen
app.post('/productos/add', (req, res, next) => {
  upload.single('imagen')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Error de Multer
      return res.status(400).json({ message: 'Error al procesar la imagen' });
    } else if (err) {
      // Otro tipo de error
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    // Continuar con el siguiente middleware o manejar la lógica principal aquí
    next();
  });
}, async (req, res) => {
  try {
    // Procesar la imagen con Multer
    const imagePath = req.file ? `images/imgsProducts/${req.file.filename}` : null;

    // Construir el objeto de producto con la ruta de la imagen
    const newProduct = {
      ...req.body,
      imagenRuta: imagePath,
    };

    // Insertar el producto en la base de datos
    const insertResult = await insertProduct(newProduct);

    res.json({ id: insertResult.insertId, ...newProduct });
    console.log('Producto agregado con éxito');
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).send('Error en el servidor');
  }
});

// Función para insertar un producto en la base de datos
function insertProduct(product) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO productos SET ?', [product], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}





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

// Configurar el servidor estático
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

export default app;
