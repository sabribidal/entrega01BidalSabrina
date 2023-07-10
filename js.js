// Objeto con los productos y sus precios
const productos = [
    { nombre: 'Harina', precio: 10 },
    { nombre: 'Galletitas', precio: 20 },
    { nombre: 'Fruta', precio: 30 },
  ];
  
  // Función para mostrar el menú de productos en el DOM
  function mostrarMenu() {
    let menu = 'Seleccione un producto:\n';
  
    for (let i = 0; i < productos.length; i++) {
      menu += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
  
    return menu;
  }
  
  // Función para mostrar los productos seleccionados en el DOM
  function mostrarProductosSeleccionados(productosSeleccionados) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
  
    productosSeleccionados.forEach((producto, index) => {
      const item = document.createElement('li');
      item.textContent = `${producto.nombre} - $${producto.precio}`;
  
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', () => {
        quitarProducto(index);
      });
  
      item.appendChild(botonEliminar);
      listaProductos.appendChild(item);
    });
  }
  
  // Función para agregar un producto a la lista de seleccionados
  function agregarProducto(indice) {
    const producto = productos[indice];
  
    let productosSeleccionados = obtenerProductosSeleccionados();
  
    if (!productosSeleccionados) {
      productosSeleccionados = [];
    }
  
    productosSeleccionados.push(producto);
    guardarProductosSeleccionados(productosSeleccionados);
    mostrarProductosSeleccionados(productosSeleccionados);
  }
  
  // Función para quitar un producto de la lista de seleccionados
  function quitarProducto(indice) {
    let productosSeleccionados = obtenerProductosSeleccionados();
  
    if (!productosSeleccionados) {
      return;
    }
  
    productosSeleccionados.splice(indice, 1);
    guardarProductosSeleccionados(productosSeleccionados);
    mostrarProductosSeleccionados(productosSeleccionados);
  }
  
  // Función para obtener los productos seleccionados desde el almacenamiento local (LocalStorage)
  function obtenerProductosSeleccionados() {
    const productosJSON = localStorage.getItem('productosSeleccionados');
    return JSON.parse(productosJSON);
  }
  
  // Función para guardar los productos seleccionados en el almacenamiento local (LocalStorage)
  function guardarProductosSeleccionados(productosSeleccionados) {
    const productosJSON = JSON.stringify(productosSeleccionados);
    localStorage.setItem('productosSeleccionados', productosJSON);
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
  
  // Función para inicializar la página
  function inicializar() {
    const productosSeleccionados = obtenerProductosSeleccionados();
  
    if (productosSeleccionados) {
      mostrarProductosSeleccionados(productosSeleccionados);
      const costoTotal = calcularCostoTotal(productosSeleccionados);
      document.getElementById('costo-total').textContent = `$${costoTotal}`;
    }
  
    const botonesAgregar = document.getElementsByClassName('boton-agregar');
  
    for (let i = 0; i < botonesAgregar.length; i++) {
      const botonAgregar = botonesAgregar[i];
      botonAgregar.addEventListener('click', () => {
        agregarProducto(i);
      });
    }
  }
  
  // Inicializar la página cuando se cargue completamente
  document.addEventListener('DOMContentLoaded', inicializar);
  