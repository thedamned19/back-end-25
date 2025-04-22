const Contador = require("./contador");

const contador1 = new Contador("Nahuel Navarro");
const contador2 = new Contador("Jorge Navarro");
const contador3 = new Contador("Brunno Navarro");

contador1.contar();

let resp = `El responsable es ${contador1.getResponsable()}`;
let cuentaI = `Cuenta individual ${contador1.getCuentaIndividual()}`;
let cuentaG = `Cuenta global ${contador1.getCuentaGlobal()}`;

console.log(resp);
console.log(cuentaI);
console.log(cuentaG);

contador2.contar();

resp = `El responsable es ${contador2.getResponsable()}`;
cuentaI = `Cuenta individual ${contador2.getCuentaIndividual()}`;
cuentaG = `Cuenta global ${contador2.getCuentaGlobal()}`;

console.log(resp);
console.log(cuentaI);
console.log(cuentaG);

contador3.contar();

resp = `El responsable es ${contador3.getResponsable()}`;
cuentaI = `Cuenta individual ${contador3.getCuentaIndividual()}`;
cuentaG = `Cuenta global ${contador3.getCuentaGlobal()}`;

console.log(resp);
console.log(cuentaI);
console.log(cuentaG);