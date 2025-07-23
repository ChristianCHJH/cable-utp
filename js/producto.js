// js/producto.js

$(document).ready(function () {
  $("#cabecera").load("../components/cabecera.html");
  $("#footer").load("../components/footer.html");
  $("#siderbarDerecho").load("../components/siderbarDerecho.html");
  $("#listaPrecios").load("../components/listaPrecios.html");
  $("#6-1427200-4").load("../productos/6-1427200-4.html");
  $("#productosSimilares").load("../components/productosSimilares.html");
  $("#cascadaNavegacion").load("../components/cascadaNavegacion.html");
});

function toExchangeImage(imagenMiniatura) {
  const imagenPrincipal = document.getElementById('img_main');
  if (imagenPrincipal && imagenMiniatura && imagenMiniatura.src) {
    imagenPrincipal.src = imagenMiniatura.src;
  }
}

function viewImage(rutaImagen) {
  const modal = document.getElementById('image-modal');
  const imagenEnModal = document.getElementById('modal-image');
  imagenEnModal.src = rutaImagen;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.classList.add('hidden');
}

function showProductTab() {
  console.log("Se hizo clic en la pestaña Producto");
  document.getElementById('product-section').classList.remove('hidden');
  document.getElementById('images-section').classList.add('hidden');
}

function showImagesTab() {
  console.log("Se hizo clic en la pestaña Imágenes");
  document.getElementById('product-section').classList.add('hidden');
  document.getElementById('images-section').classList.remove('hidden');
}
