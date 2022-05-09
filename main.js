// Ejercicio Fibonacci

// esta funcion genera el numero correspondiente dependiendo del input

function fibonacci(Value) {
  if (Value == 0) {
    return 0;
  }

  if (Value == 1) {
    return 1;
  } else {
    return fibonacci(Value - 1) + fibonacci(Value - 2);
  }
}

// esto se utiliza para leer el archivo con el input

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let Value = data;

  console.log(fibonacci(Value));
});
