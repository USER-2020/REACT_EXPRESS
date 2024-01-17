// app.js
import express from 'express';
import connection from './dbconfig.js';
import cors from 'cors'; // Importa la librería cors
// import { dataStore } from '../data/dataStore.js';

import multer from 'multer';
import path from 'path';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
app.get('/productos/searchId/:id', authenticateTokenAndRoleAdmin, (req, res) => {
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
app.post('/productos/add', authenticateTokenAndRoleAdmin, (req, res, next) => {
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
app.put('/productos/update/:id', authenticateTokenAndRoleAdmin, (req, res, next) => {
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
    const updatedProduct = {
      ...req.body,
      imagenRuta: imagePath,
    };

    // Obtener el ID del producto desde los parámetros de la URL
    const productId = req.params.id;

    // Actualizar el producto en la base de datos
    connection.query('UPDATE productos SET ? WHERE id = ?', [updatedProduct, productId], (err) => {
      if (err) {
        console.error('Error al actualizar el producto:', err);
        res.status(500).send('Error en el servidor');
      } else {
        res.json({ id: productId, ...updatedProduct });
        console.log('Producto actualizado con éxito');
      }
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).send('Error en el servidor');
  }
});


// Eliminar un producto por ID
app.delete('/productos/delete/:id', authenticateTokenAndRoleAdmin, (req, res) => {
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


//Usuaprios
//-----------------------------------------------------------------------------------------------------------------------------------------------

// Creación de usuarios
app.post('/usuarios/auth/register', async (req, res) => {
  try {
    // Obtener datos del usuario desde el cuerpo de la solicitud
    const { username, email, telefono, edad, password } = req.body;

    // Verificar si el usuario ya existe por username o correo electrónico
    const userExists = await checkUserExists(username, email);

    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Insertar el nuevo usuario en la base de datos
    const insertResult = await insertUser(username, email, telefono, edad, password);

    res.json({ id: insertResult.insertId, username, email, telefono, edad });
    console.log('Usuario creado con éxito');
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).send('Error en el servidor');
  }
});

// Función para verificar si un usuario ya existe por username o correo electrónico
function checkUserExists(username, email) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM usuarios WHERE username = ? OR correoElectronico = ?', [username, email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0);
      }
    });
  });
}

// Función para insertar un nuevo usuario en la base de datos
function insertUser(username, email, telefono, edad, password) {
  return new Promise(async (resolve, reject) => {
    try {
      // Generar un hash de la contraseña usando bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear el objeto de usuario con la contraseña encriptada
      const newUser = {
        username,
        correoElectronico: email,
        telefono,
        edad,
        contraseña: hashedPassword,
        role: 'USER',
      };

      // Insertar el nuevo usuario en la base de datos
      connection.query('INSERT INTO usuarios SET ?', [newUser], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Login de usuarios
app.post('/usuarios/auth/login', async (req, res) => {
  try {
    // Obtener datos del usuario desde el cuerpo de la solicitud
    const { user, password } = req.body;

    // Buscar el usuario por username, correo electrónico o número de celular
    const foundUser = await findUser(user);

    if (!foundUser) {
      return res.status(401).json({ message: 'Credenciales inválidas user' });
    }

    // Verificar la contraseña utilizando bcrypt
    const passwordMatch = await bcrypt.compare(password, foundUser.contraseña);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas password' });
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: foundUser.id, username: foundUser.username, role: foundUser.role }, 'secreto_del_servidor', { expiresIn: '1h' });

    // Enviar el token en el encabezado de autorización con el esquema "Bearer"
    res.json({ token, role: foundUser.role, message: 'Inicio de sesión exitoso' });
    console.log('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).send('Error en el servidor');
  }
});

// Función para buscar un usuario por username, correo electrónico o número de celular
function findUser(user) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios WHERE username = ? OR correoElectronico = ? OR telefono = ?';
    connection.query(query, [user, user, user], (err, results) => {
      if (err) {
        reject(err);
      } else {
        // Devolver el primer usuario encontrado o null si no hay resultados
        resolve(results.length > 0 ? results[0] : null);
      }
    });
  });
}


// Middleware para autenticar el token y verificar el rol
function authenticateTokenAndRoleAdmin(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token.replace('Bearer ', ''), 'secreto_del_servidor', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticación inválido' });
    }

    // Imprimir información del usuario en la consola
    console.log('Información del usuario:', user);

    // Verificar el rol del usuario
    if (user.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    req.user = user;
    next();
  });
}


function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token.replace('Bearer ', ''), 'secreto_del_servidor', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticación inválido' });
    }

    req.user = user;
    next();
  });
}


// Obtener todos los usuarios (requiere autenticación)
app.get('/usuarios', authenticateTokenAndRoleAdmin, (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error en la consulta de usuarios:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.json(results);
    }
  });
});

// Actualizar rol del usuario
app.put('/usuarios/rolUpdate/:id', authenticateTokenAndRoleAdmin, (req, res) => {
  const userId = req.params.id;
  const newRole = req.body.newRole; // Asegúrate de tener este campo en el cuerpo de la solicitud

  connection.query('UPDATE usuarios SET role = ? WHERE id = ?', [newRole, userId], (err, results) => {
    if (err) {
      console.error('Error al actualizar el rol del usuario:', err);
      res.status(500).send('Error en el servidor');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.json({ id: userId, newRole });
      console.log('Rol del usuario actualizado con éxito');
    }
  });
});

// Eliminar un usuario por ID
app.delete('/usuarios/delete/:id', authenticateTokenAndRoleAdmin, (req, res) => {
  const userId = req.params.id;

  connection.query('DELETE FROM usuarios WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      res.status(500).send('Error en el servidor');
    } else if (results.affectedRows === 0) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.status(204).send(); // No hay contenido en la respuesta (éxito sin datos)
      console.log('Usuario eliminado con éxito');
    }
  });
});



export default app;
