export const productos = [
  {
    id: 1,
    nombre: "Heladera",
    precio: 220000,
    imagen: "https://kohinoor.com.ar/Image/0/750_750-KHDA43-7_1.jpg",
  },
  {
    id: 2,
    nombre: "Lavavajillas",
    precio: 270000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_617249-MLA52351955471_112022-O.webp",
  },
  {
    id: 3,
    nombre: "Termo",
    precio: 16000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_693441-MLA50334295740_062022-O.webp",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
