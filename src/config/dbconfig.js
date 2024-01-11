// dbconfig.js
import mysql from 'mysql';

//Cargar variables de entorno


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'noble_db',
    insecureAuth: true,
    multipleStatements: true,
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
