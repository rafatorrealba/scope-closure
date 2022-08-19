// ! Variables 

var a; //declarando 

var b = 'b'; // declarando y asignando 

a = 'aa'; // reasignando 

var b = 'bb'; // redeclarando y reasignando

// TODO Global Scope 

var fruit = 'Lemon'; //Global
console.log(fruit);

function best_fruit() {
    console.log(fruit);  
}

best_fruit();