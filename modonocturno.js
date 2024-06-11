document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('boton_dark_mode');
    const body = document.body;

    // Verifica si el modo nocturno está activado en localStorage
    if (localStorage.getItem('nightMode') === 'true') {
        body.classList.add('night-mode');
        toggleModeButton.textContent = 'Desactivar modo nocturno';
    }

    // Alterna el modo nocturno y guarda la preferencia en localStorage
    toggleModeButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        const nightModeEnabled = body.classList.contains('night-mode');
        localStorage.setItem('nightMode', nightModeEnabled);
        toggleModeButton.textContent = nightModeEnabled ? 'Desactivar modo nocturno' : 'Activar modo nocturno';
    });
});