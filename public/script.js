document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    let modal = document.getElementById('modal');
    let closeModalBtn = document.getElementsByClassName('close')[0];
    let appointmentForm = document.getElementById('appointmentForm');
    let fechaInput = document.getElementById('fecha');

    // inicializar FullCalendar
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function (info) {
            
            fechaInput.value = info.startStr;
            // abrir modal
            modal.style.display = "block";
        }
    });
    calendar.render();

    // Cerrar el modal al pulsar el botón cerrar
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Cerrar el modal al hacer clic fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Enviar el formulario
    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let formData = new FormData(this);
        let cliente = formData.get('cliente');
        let fecha = formData.get('fecha');
        let hora = formData.get('hora');

        // Enviar los datos al backend
        fetch('/agendar', {
            method: 'POST',
            body: JSON.stringify({ cliente, fecha, hora }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            // Cerrar modal
            modal.style.display = "none";
        })
        .catch(error => console.error('Error:', error));
    });
});
