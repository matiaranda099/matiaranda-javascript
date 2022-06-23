//Funcion para el saludo
function saludo() {
    nombre = prompt("Ingrese su nombre completo: ");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre completo: ");
    }
    alert(nombre + " acá encontrarás productos #FREEANIMAL y una forma distinta de incluir vegetales a tu dieta! Bienvenido/a");
}


//Funcion de agregar los productos al carrito
function productoSalados() {
    mensaje = prompt("Escojé  algunos de estos productos: \n 1)Medallones \n 2)Milanesas \n 3)Empanadas");
    if (mensaje === "1") {
        alert("Comprás Medallones");
    } else if (mensaje === "2") {
        alert("Comprás Milanesas");
    } else if (mensaje === "3") {
        alert("Comprás Empanadas");
    }
    opcion = prompt(
        "vuelva a ingresar una opcion: \n 2)Mostrar monto total \n 3)Finalizamos por hoy!");
}

//Hago la funcion para terminar la compra y mostrar los precios
function terminarCompra() {
    if (mensaje === "1") {
        alert("Elegiste Medallones a un precio total de: $" + medallones);
    } else if (mensaje === "2") {
        alert("Elegiste Milanesas a un precio de: $" + milanesas);
    } else if (mensaje === "3") {
        alert("Elegiste Empanadas a un precio de : $" + empanadas);
    }
}

//Declaro algunas variables sin inicializar
let mensaje;
let medallones = 450;
let milanesas = 550;
let empanadas = 650;

let nombre;
saludo();
let opcion = prompt(
    "ingrese una opcion: \n 1)Mostrar los productos \n 2)Terminar la compra  \n 3)Finalizamos por hoy! "
);
while (opcion !== "3") {
    if (opcion === "1") {
        productoSalados();
    }
    if (opcion === "2") {
        terminarCompra();
        opcion = "3";
    }
}

alert("Gracias por salvar a la vida Animal");
