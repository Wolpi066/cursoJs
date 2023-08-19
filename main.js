// Arrow functions
const perimetroTriangulo = (a, b, c) => a +b + c;
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const respuesta = (res) => alert(`Su respuesta es: ${res}`);
const dividir = (a, b) => {
  let res = null;

  // Validation to prevent dividing for 0
  if(b !== 0)
  {
    res = a / b;
  }

  return res;
}

// Variables
let a, b, c, d, figura, cuentaEleccion;

/*
  The user asign the values of the numbers
  according to the value of cuentaEleccion
*/
function asignarNumeros(){

  if(cuentaEleccion === "P" && figura === "C"){
    // Number validation
  do{
    a = parseInt(prompt("Ingrese el lado"));
    if(isNaN(a)){
      alert("Por favor ingrese un número");
    }
  }while(isNaN(a));

  } else{

  // Number validation
  do{
    a = parseInt(prompt("Ingrese el primer número"));
    if(isNaN(a)){
      alert("Por favor ingrese un número");
    }
  }while(isNaN(a));
   
  // Number validation
  do{
    b = parseInt(prompt("Ingrese el segundo número"));
    if(isNaN(b)){
      alert("Por favor ingrese un número");
    }
  }while(isNaN(b));

  /*
    If the user wants to calculate the perimterer
    of a figure
  */
  if(cuentaEleccion === "P"){

    // Number validation
    do{
      c = parseInt(prompt("Ingrese el tercer número"));
      if(isNaN(c)){
        alert("Por favor ingrese un número");
      }
    }while(isNaN(c));

  }
  }
}

// Start
alert("Bienvenido a mi calculadora");

// Main loop
do{

// Choice validation
do{

  cuentaEleccion = prompt("Elija que cuenta desea realizar [+][-][*][/] [A]area [P]perimetro [Z]salir").toUpperCase();
  
  if(
    cuentaEleccion !== "+" &&
    cuentaEleccion !== "-" &&
    cuentaEleccion !== "*" &&
    cuentaEleccion !== "/" &&
    cuentaEleccion !== "A" &&
    cuentaEleccion !== "P" &&
    cuentaEleccion !== "Z" 
    ){
      alert("Ingrese una opcion válida");
    }

}while(
  cuentaEleccion !== "+" &&
  cuentaEleccion !== "-" &&
  cuentaEleccion !== "*" &&
  cuentaEleccion !== "/" &&
  cuentaEleccion !== "A" &&
  cuentaEleccion !== "P" &&
  cuentaEleccion !== "Z"
);

// Break the main loop if user type "Z"
if(cuentaEleccion === "Z") break; 

// Figure choice and info
if(cuentaEleccion === "A" || cuentaEleccion === "P"){

  // Geometric figure validation
  do{
    figura = prompt("Ingrese que figura desea [T]triángulo [C]cuadrado").toUpperCase();
    if(figura !== "T" && figura !== "C"){
      alert("Ingrese una figura dentro de las opciones")
    }
  }while(figura !== "T" && figura !== "C");

  //Extra info
  if(cuentaEleccion === "A" && figura === "T"){
    alert("La formula es base x altura / 2");
  } else if(cuentaEleccion === "A" && figura === "C"){
    alert("La formula es lado x lado");
  }
}

asignarNumeros();

// Final switch to do the actual math
switch(cuentaEleccion){
  case "+":
    respuesta(sumar(a, b));
    break;

  case "-":
    respuesta(restar(a, b));
    break;

  case "*":
    respuesta(multiplicar(a, b));
    break;

  case "/":
    respuesta(dividir(a, b));
    if(b === 0) alert("No es posible dividir entre 0");
    break;

  case "A":
    if(figura === "T"){
      respuesta(multiplicar(a, b) / 2);
    } else{
      respuesta(multiplicar(a, b));
    }
    break;

  case "P":
    if(figura ==="T"){
    respuesta(perimetroTriangulo(a, b, c));
    break;
  } else{
    respuesta(a * 4);
  }

}
}while(true);