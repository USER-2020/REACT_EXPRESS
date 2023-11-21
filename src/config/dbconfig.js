// dbconfig.js
import mysql from 'mysql';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'noble_db',
    insecureAuth: true, // Agrega esta línea para usar el protocolo de autenticación más antiguo
};

const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida correctamente');
});

export default connection;
