document.getElementById('btnAutobus').addEventListener('click', function() {
    tomarDecision('autobus');
});

document.getElementById('btnCaminar').addEventListener('click', function() {
    tomarDecision('caminar');
});

function tomarDecision(decision) {
    var resultado = document.getElementById('resultado');
    if (decision === 'autobus') {
        resultado.innerHTML = 'El anciano toma el autobús y conoce a un amable estudiante de intercambio.';
    } else if (decision === 'caminar') {
        resultado.innerHTML = 'El anciano decide caminar y ayuda a un niño a encontrar su juguete perdido.';
    }
}
