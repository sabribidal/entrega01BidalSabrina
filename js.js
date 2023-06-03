// Precios de los productos
let precios = {
    producto1: 10,
    producto2: 20,
    producto3: 30,
};
  
// Selección de productos (usuario)
function seleccionarProductos(){
    const productosSeleccionados = [];
    let continuar = true;
  
    while (continuar){
      const seleccion = prompt(`Seleccione un producto:
        1. Harina
        2. Galletitas
        3. Fruta
        (Ingrese "fin" para terminar y ver el precio total.)`);

    switch (seleccion){
        case '1':
            productosSeleccionados.push('producto1');
            console.log("Harina $10")
            break;
        case '2':
            productosSeleccionados.push('producto2');
            console.log("Galletitas $20")
            break;
        case '3':
            productosSeleccionados.push('producto3');
            console.log("Fruta $30")
            break;
        case 'fin':
            continuar = false;
            break;
        default:
            alert('Selección inválida. Intente nuevamente.');
            break;
        }
    }
  
    return productosSeleccionados;
}
  
// Calcular el costo total de los productos seleccionados
function calcularCostoTotal(productosSeleccionados){
    let costoTotal = 0;

    for (let i = 0; i <= productosSeleccionados.length; i++){
    const producto = productosSeleccionados[i];
    if (precios.hasOwnProperty(producto)){
        costoTotal += precios[producto];
        }
    }
  
    return costoTotal;
}
  

const productosSeleccionados = seleccionarProductos();
const costoTotal = calcularCostoTotal(productosSeleccionados);
alert(`El costo total de los productos seleccionados es: $${costoTotal}`);