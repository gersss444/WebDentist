document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/agendar', {
        method: 'POST',
        body: JSON.stringify({
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            telefono: formData.get('telefono'),
            fecha: formData.get('fecha'),
            hora: formData.get('hora')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
});
