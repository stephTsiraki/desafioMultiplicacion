//Ingresar número entre 1 y 20, inclusive.
let num = parseInt(prompt("Ingrese un número entre 1 y 20 (incluidos): "));
let validarNum = () => {
  if (num <= 20 && num > 0) {

    //for para calcular tablas de multiplicar
    for (let i = 1; i <= num; i++) {
      console.log(`${i} x ${num} = ${i * num}`);
    }

    //for anidado para calcular factorial
    for (let i = 1; i <= num; i++) {
      let res = 1;
      for (let j = 1; j <= i; j++) {
        res = res * j;
      }
      console.log(`Factorial de ${i} es: ${res}`);
    }
  } else {

    //Si el número no es válido, alertar al usuario con mensaje "Número fuera de rango"
    alert("Número fuera del rango");
  }
};

//Llamar a la función
validarNum();
