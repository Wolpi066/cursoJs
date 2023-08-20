import { generarProductos, productosDisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    generarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
let listaCarrito = document.getElementById("items")
let totalesCarrito = document.getElementById("totales")

export const comprarProducto = (idProducto) => {
    
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)

    const { id, nombre, precio, imagen } = producto

    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined){
        const nuevoProductoEnCarrito = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        }

        carrito.push(nuevoProductoEnCarrito)
        sessionStorage.setItem("carrito", JSON.stringify(carrito))

    }else{
        const indexProducto = carrito.findIndex((producto) => producto.id === idProducto)

        carrito[indexProducto].cantidad++
        carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

    carrito = JSON.parse(sessionStorage.getItem("carrito"))

}

const generarCarrito = () => {

    carrito.forEach(producto => {

        const {id, imagen, nombre, cantidad, precio} = producto
        
        let body = document.createElement("tr")

        body.className = "productoCarrito"

        body.innerHTML = `
        <th><img id=fotoProductoEnCarrito src="${imagen}" class="card-img-top"></th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>$${precio}</td>
        <td>
        <button id="+${id}" class="btn btn-succes">+</button>
        <button id="-${id}" class="btn btn-danger">-</button>
        </td>
        `

        listaCarrito.append(body)

        const btnAgregar = document.getElementById(`+${id}`)
        const btnSacar = document.getElementById(`-${id}`)

        btnAgregar.addEventListener("click", () => console.log())
        btnSacar.addEventListener("click", () => console.log())

    });

    dibujarFooter()

}

const dibujarFooter = () => {

    if(carrito.lenght > 0){
        totalesCarrito.innerHTML = ""

        let footer  = document.createElement("tr")

        footer.innerHTML = `
        <th><b>Totales:</b></th>
        `
    }

}