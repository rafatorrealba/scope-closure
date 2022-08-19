// ! reasignación y redeclaracion de variables con ver, let y const

// TODO con var
var nombre; // declarar
nombre = 'Rafael'; // asignar
var nombre = 'Alejandro'; // reasignar y redeclarar

// TODO con let 
let apellido; // declarar
apellido = 'Torrealba'; //asiganar

// let apellido = 'Contreras'; // genera error por el block scope

// TODO con conts 

// const edad; // no se puede solo declarar, debe ser asiganada tambien
const edad = 37; // declarar y asignar

// edad = 39;  // no se puede reasignar una variable con consts

// const edad = 20; // no se puede redeclarar una varibale con consts 

// TODO const con arreglos / se pueden modificar 
const vehicles = []; 
console.log(vehicles);

vehicles.push("😜");
console.log(vehicles);

vehicles.pop(vehicles);
console.log(vehicles);