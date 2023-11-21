// app.js
import express from 'express';
import connection from './dbconfig.js';

const app = express();

// Ruta de ejemplo para obtener datos de la base de datos
app.get('/productos', (req, res) => {
  // Realizar una consulta a la base de datos
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(results);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
