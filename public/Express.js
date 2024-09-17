app.post('/pacientes', (req, res) => {
    const { nombre, historial } = req.body;
    // Guardar paciente en la base de datos
    console.log(`Paciente ${nombre} agregado con historial: ${historial}`);
    res.json({ message: 'Paciente agregado exitosamente' });
});

app.post('/pagos', (req, res) => {
    const { nombre, monto } = req.body;
    // Procesar el pago aquí (ej. usando Stripe)
    console.log(`Pago recibido de ${nombre} por ${monto}`);
    res.json({ message: 'Pago realizado exitosamente' });
});
