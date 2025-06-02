function verificarVoto() {
  const edad = parseInt(document.getElementById('edad').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(edad) || edad < 0) {
    resultado.textContent = 'Por favor ingresa una edad válida.';
  } else if (edad >= 18) {
    resultado.textContent = 'Puedes votar.';
  } else {
    resultado.textContent = 'No puedes votar.';
  }
}

function calcularSueldo() {
  const horas = parseFloat(document.getElementById('horas').value);
  const pago = parseFloat(document.getElementById('pago').value);
  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else {
    sueldo = 40 * pago + (horas - 40) * pago * 2;
  }
  document.getElementById('total').textContent = `Sueldo total: $${sueldo}`;
}

function elegirRegalo() {
      const p = parseFloat(document.getElementById("presupuesto").value);
      let regalo;
      if (p <= 10) regalo = "Tarjeta";
      else if (p <= 100) regalo = "Chocolates";
      else if (p <= 250) regalo = "Flores";
      else regalo = "Anillo";
      document.getElementById("resultado").innerText = `Puedes comprar: ${regalo}`;
    }

   function calcularEstacionamiento() {
      let h = parseInt(document.getElementById("horas").value);
      let total = 0;
      if (h <= 2) total = h * 5;
      else if (h <= 5) total = 2 * 5 + (h - 2) * 4;
      else if (h <= 10) total = 2 * 5 + 3 * 4 + (h - 5) * 3;
      else total = 2 * 5 + 3 * 4 + 5 * 3 + (h - 10) * 2;
      document.getElementById("resultado").innerText = `Total: $${total}`;
    }

function menorEdad() {
  let nombre1 = document.getElementById("n1").value;
  let edad1 = parseInt(document.getElementById("e1").value);
  let nombre2 = document.getElementById("n2").value;
  let edad2 = parseInt(document.getElementById("e2").value);
  let nombre3 = document.getElementById("n3").value;
  let edad3 = parseInt(document.getElementById("e3").value);
  let menorNombre, menorEdad;
  if (edad1 <= edad2 && edad1 <= edad3) {
    menorEdad = edad1;
    menorNombre = nombre1;
  } else if (edad2 <= edad1 && edad2 <= edad3) {
    menorEdad = edad2;
    menorNombre = nombre2;
  } else {
    menorEdad = edad3;
    menorNombre = nombre3;
  }
document.getElementById("resultado").innerText =
    `La persona menor es ${menorNombre} con ${menorEdad} años.`;
}

function calcularDescuento() {
  let precio = parseFloat(document.getElementById("precio").value);
  let desc;
  if (precio >= 200) {
    desc = 0.15;
  } else if (precio > 100) {
    desc = 0.12;
  } else {
    desc = 0.10;
  }
  let total = precio - precio * desc;
  document.getElementById("resultado").innerText = `Descuento: ${desc * 100}%. Total: $${total}`;
}

function mayorNumero() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let n3 = parseFloat(document.getElementById("n3").value);
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado").innerText = "Por favor, ingresa todos los números.";
    return;
  }
  let mayor;
  if (n1 >= n2 && n1 >= n3) {
    mayor = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    mayor = n2;
  } else {
    mayor = n3;
  }
  document.getElementById("resultado").innerText = `El número mayor es: ${mayor}`;
}

function verResultado() {
  const nota = parseFloat(document.getElementById("nota").value);
  let mensaje;
  if (nota >= 70) {
    mensaje = "Aprobado";
  } else {
    mensaje = "Reprobado";
  }
  document.getElementById("resultado").innerText = `Resultado: ${mensaje}`;
}


    function verDiaSemana() {
      const dia = parseInt(document.getElementById("dia").value);
      const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
      if (dia >= 1 && dia <= 7) {
        document.getElementById("resultado").innerText = `Día correspondiente: ${dias[dia - 1]}`;
      } else {
        document.getElementById("resultado").innerText = "Número no válido. Ingresa un número entre 1 y 7.";
      }
    }

function dividir() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  let resultado;
  if (b === 0) {
    resultado = "Error: División por cero";
  } else {
    resultado = a / b;
  }
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}


     function clasificarNumero() {
      const num = parseFloat(document.getElementById("num").value);
      let mensaje;
      if (num > 0) mensaje = "Positivo";
      else if (num < 0) mensaje = "Negativo";
      else mensaje = "Cero";
      document.getElementById("resultado").innerText = `El número es: ${mensaje}`;
    }

     function parImpar() {
      const num = parseInt(document.getElementById("numero").value);
      if (isNaN(num)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido.";
        return;
      }
      const resultado = num % 2 === 0 ? "Par" : "Impar";
      document.getElementById("resultado").innerText = `El número es: ${resultado}`;
    }

function esBisiesto() {
  const a = parseInt(document.getElementById("año").value);

  if (a % 4 === 0) {
    if (a % 100 === 0) {
      if (a % 400 === 0) {
        document.getElementById("resultado").innerText = "Es un año bisiesto";
      } else {
        document.getElementById("resultado").innerText = "No es un año bisiesto";
      }
    } else {
      document.getElementById("resultado").innerText = "Es un año bisiesto";
    }
  } else {
    document.getElementById("resultado").innerText = "No es un año bisiesto";
  }
}
