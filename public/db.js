const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: '',
    user: 'Gerson',  
    password: '',  
    database: 'DWeb',  
    port: 3306
});

// Conectarse a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos como ID', connection.threadId);
});

module.exports = connection;
