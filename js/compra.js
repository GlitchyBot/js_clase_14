const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById("carrito");
const procesarCompraBtn = document.getElementById("procesar-compra");

cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStorageCompra()
  );

  carrito.addEventListener("click", (e) => {
    compra.eliminarProducto(e);
  });

  compra.calcularTotal();

  procesarCompraBtn.addEventListener("click", procesarCompra);

  carrito.addEventListener("change", (e) => {
    compra.obtenerEvento(e);
  });
  carrito.addEventListener("keyup", (e) => {
    compra.obtenerEvento(e);
  });
}

function procesarCompra() {
  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      type: "error",
      text: "No hay productos, selecciona alguno",
      showConfirmButton: false,
      timer: 2000,
    }).then(function () {
      window.location = "index.html";
    });
  }
}
