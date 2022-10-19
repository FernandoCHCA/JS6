// Funciones

function operaciones_logicas(numero1, numero2, operador){
    let total = 0;
    if (operador == '+' || operador == 'SUMA') {
        total = numero1 + numero2;
        return total
    }
    else if (operador == '-' || operador == 'RESTA') {
        total = numero1 - numero2;
        return total;
    }
    else if (operador == '*' || operador == 'MULTIPLICACION') {
        total = numero1 * numero2;
        return total;
    }
    else if (operador == '/' || operador == 'DIVISION') {
        total = numero1 / numero2;
        return total;
    }
    else {
        total = 'Operacion fallida, vuelva a intentarlo';
        return total;
    }
};

// Ejercicio 1

function calcular() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operador = (document.getElementById("ope").value);

    let resultado = (document.getElementById("resul"));
    
    resultado.value = operaciones_logicas(numero1, numero2, operador);
}


// Ejercicio 2