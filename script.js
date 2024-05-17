function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // convertir a metros
    const imc = peso / (altura * altura);
    const mensaje = document.getElementById('mensaje');
    const imagen = document.getElementById('imagen');

    if (isNaN(imc)) {
        mensaje.textContent = 'Por favor, introduce valores válidos.';
        imagen.style.display = 'none';
        return;
    }

    let texto, src;

    if (imc < 18.5) {
        texto = 'Tienes bajo peso. ¡Debes comer más!';
        src = 'flaco.webp'; 
    } else if (imc >= 18.5 && imc <= 24.9) {
        texto = 'Tienes un peso saludable. ¡Sigue así!';
        src = 'normal.jpg'; 
    } else {
        texto = 'Tienes sobrepeso. ¡Debes dejar de comer tanto!';
        src = 'sobrepeso.avif'; 
    }

    mensaje.textContent = texto;
    imagen.src = src;
    imagen.style.display = 'block';
}