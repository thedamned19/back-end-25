const Contador = require("./contador");

const contador1 = new Contador("Nahuel Navarro");

contador1.contar();
console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
