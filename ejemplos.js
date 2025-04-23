// ES 7
// exponencial (**)
// includes -> arrays

const valor1 = 5;

// console.log(5*5*5);
console.log(5**3);

const nombres = ["Gabriel", "Isaac", "Joaquín"];
console.log(nombres.includes("Isaac"));


// ES 8
// async, await
// Object.entries(), Object.values(), Object.Keys

const estudiante1 = {
    nombre: "Joaquín",
    apellido: "Capanegra"
}

console.log(Object.entries(estudiante1));
console.log(Object.keys(estudiante1));
console.log(Object.values(estudiante1));

// ES 9

const direccionEstudiante1 = {
    ciudad: "Buenos Aires",
    barrio: "Palermo",
    altura: 3000
}

// desestructuración
const {apellido} = estudiante1;
console.log(apellido);

// spread
const estudianteUnificado = {...estudiante1, ...direccionEstudiante1};
console.log(estudianteUnificado);

// operador rest (restante o resto)
const {altura, ciudad, barrio, ...rest} = estudianteUnificado;

console.log(rest);

// ES 10
// trim() -> valores de tipo String
// flat() -> arrays
// Dynamic import

const cadena = "       hola mundo         ";
console.log({cadena});
const eliminarEspacios = cadena.trim();
console.log({eliminarEspacios});

// El flat unifica en una sola dimension.
const numeros = [30, 40, 50, [4, 5, 6, 7], 60, 70, 80];
console.log(numeros);
console.log(numeros.flat());

// ES11
// nullish -> colocar valor por defecto.
let estaLloviendo;

const llueve = estaLloviendo || "La variable no tiene valor";

console.log({llueve});








