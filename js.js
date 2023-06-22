// Objeto con los productos y sus precios
const productos = [
    { nombre: 'Harina', precio: 10 },
    { nombre: 'Galletitas', precio: 20 },
    { nombre: 'Fruta', precio: 30 },
];

// Función para mostrar el menú de productos
function mostrarMenu() {
    let menu = 'Seleccione un producto:\n';

    for (let i = 0; i < productos.length; i++) {
        menu += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }

    menu += '(Ingrese "fin" para terminar y ver el precio total.)';

    return menu;
}

// Función para seleccionar productos
function seleccionarProductos() {
    const productosSeleccionados = [];

    while (true) {
        const seleccion = prompt(mostrarMenu());

        if (seleccion === 'fin') {
            break;
        }

        const indiceProducto = parseInt(seleccion) - 1;

        if (indiceProducto >= 0 && indiceProducto < productos.length) {
            const producto = productos[indiceProducto];
            productosSeleccionados.push(producto);
            alert(`Producto agregado: ${producto.nombre}`);
        } else {
            alert('Selección inválida. Intente nuevamente.');
        }
    }

    return productosSeleccionados;
}

// Función para calcular el costo total de los productos seleccionados
function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;

    for (let i = 0; i < productosSeleccionados.length; i++) {
        const producto = productosSeleccionados[i];
        costoTotal += producto.precio;
    }

    return costoTotal;
}

// Función para mostrar los productos seleccionados
function mostrarProductosSeleccionados(productosSeleccionados) {
    let listaProductos = 'Productos seleccionados:\n';

    for (let i = 0; i < productosSeleccionados.length; i++) {
        const producto = productosSeleccionados[i];
        listaProductos += `${producto.nombre} - $${producto.precio}\n`;
    }

    alert(listaProductos);
}

// Función para quitar un producto de la lista de seleccionados
function quitarProducto(productosSeleccionados) {
    const seleccion = prompt('Ingrese el número del producto a quitar:');
    const indiceProducto = parseInt(seleccion) - 1;

    if (indiceProducto >= 0 && indiceProducto < productosSeleccionados.length) {
        const productoQuitado = productosSeleccionados.splice(indiceProducto, 1)[0];
        alert(`Producto quitado: ${productoQuitado.nombre}`);
    } else {
        alert('Selección inválida. Intente nuevamente.');
    }
}

// Menú principal
function menuPrincipal() {
    const productosSeleccionados = seleccionarProductos();
    mostrarProductosSeleccionados(productosSeleccionados);
    const costoTotal = calcularCostoTotal(productosSeleccionados);
    alert(`El costo total de los productos seleccionados es: $${costoTotal}`);

    while (true) {
        const opcion = prompt('¿Desea agregar otro producto (1), quitar un producto (2) o finalizar (3)?');

        switch (opcion) {
            case '1':
                const nuevosProductos = seleccionarProductos();
                productosSeleccionados.push(...nuevosProductos);
                mostrarProductosSeleccionados(nuevosProductos);
                break;
            case '2':
                quitarProducto(productosSeleccionados);
                break;
            case '3':
                alert('Gracias por su compra. ¡Hasta luego!');
                return;
            default:
                alert('Opción inválida. Intente nuevamente.');
                break;
        }
    }
}

// Ejecutar el menú principal
menuPrincipal();