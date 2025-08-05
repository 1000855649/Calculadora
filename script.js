function calcularResultado() {
  const num1 = parseFloat(document.getElementById("PrimerNumero").value);
  const num2 = parseFloat(document.getElementById("SegundoNumero").value);
  const operacion = document.getElementById("operacionMatematica").value;
  const resultadoElement = document.getElementById("resultado");

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        resultadoElement.textContent = "No se puede dividir por cero.";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      resultadoElement.textContent = "Seleccione una operación.";
      return;
  }

  resultadoElement.textContent = resultado;
}

document
  .getElementById("btnCalcular")
  .addEventListener("click", calcularResultado);
