import { comprarProducto } from "./carrito.js"

const divProductos = document.getElementById("productos");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () => {
  generarProductos(productosDisponibles)
})

export const generarProductos = (productos) => {

  productos.forEach((producto) => {

    const { id, nombre, precio, imagen} = producto;

    let card = document.createElement("div");

    card.className = "producto";
    card.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="${imagen}" class="card-img-top" alt="imagen producto">
          <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: <b>$${precio}</b></p>
          <button id="boton${id}" class="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>`;

    divProductos.appendChild(card);

    const botonComprar = document.getElementById(`boton${id}`)
    botonComprar.addEventListener("click", () => comprarProducto(id))

  });
};
