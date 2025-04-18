const Contador = require("./contador");

const contador1 = new Contador("Nahuel Navarro");
const contador2 = new Contador("Jorge Navarro");

contador1.contar();

console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());

contador2.contar();

console.log(contador2.getResponsable());
console.log(contador2.getCuentaIndividual());
console.log(contador2.getCuentaGlobal());
