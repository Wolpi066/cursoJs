import { generarProductos, productosDisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null &&
    sessionStorage.setItem("carrito", JSON.stringify([]));

document.addEventListener("DOMContentLoaded", () => {
    generarCarrito();
});

let carrito = JSON.parse(sessionStorage.getItem("carrito"));
let listaCarrito = document.getElementById("items");
let totalesCarrito = document.getElementById("totales");
const btnCarrito = document.getElementById("botonCarrito");
const carritoTabla = document.getElementById("carrito");

btnCarrito.addEventListener("click", () => {
    generarCarrito();
    if (carritoTabla.style.display === "block") {
        carritoTabla.style.display = "none";
    } else {
        carritoTabla.style.display = "block";
    }
});

export const comprarProducto = (idProducto) => {
    const producto = productosDisponibles.find(
    (producto) => producto.id === idProducto
    );

    const { id, nombre, precio, imagen } = producto;

    const productoCarrito = carrito.find(
    (producto) => producto.id === idProducto
    );

    if (productoCarrito === undefined) {
        const nuevoProductoEnCarrito = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1,
        };

    carrito.push(nuevoProductoEnCarrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        const indexProducto = carrito.findIndex(
        (producto) => producto.id === idProducto
        );

    carrito[indexProducto].cantidad++;
    carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }

    carrito = JSON.parse(sessionStorage.getItem("carrito"));
    alert('Producto agregado al carrito');
    generarCarrito();
};

const generarCarrito = () => {
    listaCarrito.innerHTML = '';
    let cantidadTotal = 0;
    let costoTotal = 0;

    if (carrito.length === 0) {
        const mensaje = document.createElement('tr');
        mensaje.innerHTML = `
        <td colspan="6">No hay productos en el carrito</td>
        `;
        listaCarrito.append(mensaje);
    } else {
        carrito.forEach((producto) => {
        const { id, imagen, nombre, cantidad, precio } = producto;
        let body = document.createElement('tr');
        body.className = 'productoCarrito';
        body.innerHTML = `
            <th><img id=fotoProductoEnCarrito src="${imagen}" class="card-img-top" style="width:40%; height:30%"></th>
            <td>${nombre}</td>
            <td>${cantidad}</td>
            <td>$${precio}</td>
            <td>
            <button id="+${id}" class="btn btn-success">+</button>
            <button id="-${id}" class="btn btn-danger">-</button>
            </td>
        `;
        listaCarrito.append(body);

        const btnAgregar = document.getElementById(`+${id}`);
        const btnSacar = document.getElementById(`-${id}`);
        btnAgregar.addEventListener('click', () => aumentarCantidad(id));
        btnSacar.addEventListener('click', () => disminuirCantidad(id));

        cantidadTotal += cantidad;
        costoTotal += precio;
        });

        document.getElementById('cantidadTotal').textContent = cantidadTotal;
        document.getElementById('costoTotal').textContent = `$${costoTotal}`;

        generarTotales();
}
};

const dibujarFooter = () => {
    if (carrito.length > 0) {
        totalesCarrito.innerHTML = '';
        let footer = document.createElement('tr');
        footer.innerHTML = `
            <th colspan="2"><b>Totales:</b></th>
            <td id="cantidadTotal"></td>
            <td></td>
            <td id="costoTotal"></td>
        `;
        totalesCarrito.append(footer);
    } else {
        totalesCarrito.innerHTML = '<h3>No hay productos en el carrito</h3>';
    }
    };

/*
const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0);
    const cantidadTotal = carrito.reduce(
    (total, { cantidad }) => total + cantidad,0);

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal,
    };
};
*/

const generarTotales = () => {
    const { cantidadTotal, costoTotal } = calcularTotales();
    document.getElementById('cantidadTotal').textContent = cantidadTotal;
    document.getElementById('costoTotal').textContent = `$${costoTotal}`;
};

const calcularTotales = () => {
    let cantidadTotal = 0;
    let costoTotal = 0;
    carrito.forEach((producto) => {
    cantidadTotal += producto.cantidad;
    costoTotal += producto.precio;
    });
    return {
    cantidadTotal,
    costoTotal,
    };
};

const aumentarCantidad = (id) => {
    const indexProducto = carrito.findIndex((producto) => producto.id === id);
    const precio =
    carrito[indexProducto].precio / carrito[indexProducto].cantidad;

    carrito[indexProducto].cantidad++;
    carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    generarCarrito();
};

const disminuirCantidad = (id) => {
    const indexProducto = carrito.findIndex((producto) => producto.id === id);
    const precio =
    carrito[indexProducto].precio / carrito[indexProducto].cantidad;

    carrito[indexProducto].cantidad--;
    carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad;

    if (carrito[indexProducto].cantidad === 0) {
    carrito.splice(indexProducto, 1);
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    generarCarrito();
};
