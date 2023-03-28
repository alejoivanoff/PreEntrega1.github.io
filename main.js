alert("¡Bienvenidos a ImportShoes, la mejor pagina de zapatillas importadas!");

const productos = [
    { nombre: "Nike Air Force 1 Low Supreme", precio: 340 },
    { nombre: "Nike Air Force 1 Low", precio: 420 },
    { nombre: "Jordan 11 Retro", precio: 240 },
    { nombre: "Jordan 4 Retro Black", precio: 370 },
];


function mostrarProductos() {
    let mensaje = "PRODUCTOS DISPONIBLES:\n\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(mensaje);
}


mostrarProductos();
let opcion = parseInt(prompt("Ingrese el número del producto que desea comprar:"));


while (isNaN(opcion) || opcion < 1 || opcion > productos.length) {
    opcion = parseInt(prompt("Opción inválida. Ingrese el número del producto que desea comprar:"));
}


let cantidad = parseInt(prompt(`Ingrese la cantidad de "${productos[opcion - 1].nombre}" que desea comprar:`));


while (isNaN(cantidad) || cantidad < 1) {
    cantidad = parseInt(prompt(`Cantidad inválida. Ingrese la cantidad de "${productos[opcion - 1].nombre}" que desea comprar:`));
}


const total = cantidad * productos[opcion - 1].precio;
alert(`El total de su compra es de $${total}. ¡Gracias por su compra!`);