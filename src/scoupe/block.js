function fruits() {
    if(true) {
        var fruit_one = 'Apple'; // funtions scope, se puede llamar desde otro bloque del la funtion 
        const fruit_two = 'Kiwi'; // block scope
        let fruit_trhee = 'Banana'; // block scope

        console.log(fruit_two);
        console.log(fruit_trhee);  
    }
    console.log(fruit_one);
    // console.log(fruit_two); // error, se puede acceder a la variable
    // console.log(fruit_trhee);  // error, se puede acceder a la variable
}

fruits();

//  console.log(fruit_one);
// console.log(fruit_two);
// console.log(fruit_trhee);