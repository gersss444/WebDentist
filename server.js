const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuración del servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Archivos estáticos (HTML, CSS, JS del frontend)
app.use(express.static('public'));

// Rutas
app.post('/agendar', (req, res) => {
    const { nombre, email, telefono, fecha, hora } = req.body;
    // Aquí guardarías la cita en una base de datos o en un archivo
    console.log(`Cita agendada para ${nombre} el ${fecha} a las ${hora}`);
    
    // Enviar una respuesta
    res.json({ message: 'Cita agendada exitosamente' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
