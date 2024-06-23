function calcularMedia() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    var numero4 = parseFloat(document.getElementById('numero4').value);
    var numero5 = parseFloat(document.getElementById('numero5').value);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || isNaN(numero5)) {
        alert("Por favor, insira todos os cinco números.");
        return;
    }

    var media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    document.getElementById('resultado').innerText = "A média aritmética é: " + media.toFixed(2);
}