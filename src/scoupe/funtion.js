// ! Funtion Scope

// Construcción de una funcción
function greeting() {
    let user_name = 'Ana'
    console.log(user_name);

    if (user_name === 'Ana')
    console.log(`Hola ${user_name}`)
}

greeting(); // ejecuta la funcion declara anteriormente

// Genera error, la variable user_name no esta declarada globalmente
console.log(`Hola ${user_name}`); 