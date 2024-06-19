//Programacion
document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const estaturaCM = parseFloat(document.getElementById("estatura").value);

    if (!isNaN(peso) && !isNaN(estaturaCM)) {
        const estatura = estaturaCM / 100;

        const IMC = peso / (estatura*estatura);
        const categoria = calcularCategoria(IMC);

        document.getElementById("resultadoimc").textContent = IMC.toFixed(2);
        document.getElementById("categoria").textContent = categoria;
        document.getElementById("resultado").style.display = "block";
    }else {
        alert("Por favor, ingrese valores válidos para peso y estatura.");
    }
    
});

function calcularCategoria(IMC){
    
    if (IMC < 18.5) {

        return 'Bajo peso';
    } else if (IMC >= 18.5 && IMC < 24.9) {
        return 'Peso normal';

    } else if (IMC >= 25 && IMC < 29.9) {
        return 'Sobrepeso';

    } else if (IMC >= 30 && IMC < 35){
        return 'Obesidad Tipo 1';
    } else if (IMC >= 35 && IMC < 40){
        return 'Obesidad Tipo 2';
    } else {
        return 'Obesidad Tipo 3';
    }
};