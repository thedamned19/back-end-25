function saludar() {
    console.log("Hola mundo!!!");
}

saludar();

const otroSaludo = () => {
    console.log("Otro saludo");
}

otroSaludo();

const sumar = (valor1, valor2) => {
    return valor1 + valor2;
}
const restar = (valor1, valor2) => {
    return valor1 - valor2;
}
const multiplicar = (valor1, valor2) => {
    return valor1 * valor2;
}

// Cuando es una sola línea se puede escribir la función de esta manera.
const dividir = (valor1, valor2) =>  valor1 / valor2;


console.log(sumar(5,8));
console.log(restar(5,8));
console.log(multiplicar(5,8));
console.log(dividir(5,8));
