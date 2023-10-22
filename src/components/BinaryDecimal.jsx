import React, { useState } from "react";
import "./BinaryDecimal.css";

const BinaryDecimmal = () => {
    // Estado para el valor binario de entrada
  const [binaryInput, setBinaryInput] = useState("");
    // Estado para el valor decimal de salida
  const [decimalOutput, setDecimalOutput] = useState("");

  // Función para manejar la conversión de binario a decimal
  const handleConvert = () => {
    const binaryNumber = binaryInput;
    const decimalNumber = binario_a_decimal(binaryNumber);
    setDecimalOutput(decimalNumber);
  };

  // Función para convertir un número binario a decimal
  const binario_a_decimal = (binary) => {
    // Dividimos el número binario en dígitos individuales y los invertimos
    const binaryArray = binary.split("").reverse();
    let decimal = 0; // Inicializamos el valor decimal en 0

    // Recorremos la matriz de dígitos binarios
    for (let i = 0; i < binaryArray.length; i++) {
      // Obtenemos el dígito binario actual y lo convertimos a un número entero
      const bit = parseInt(binaryArray[i]);
      // Aplicamos la fórmula para convertir cada dígito binario a decimal y lo sumamos al valor decimal
      decimal += bit * Math.pow(2, i);
    }

    return decimal; // Devolvemos el valor decimal resultante
  };

  // Función para manejar cambios en la entrada binaria
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Usamos una expresión regular para asegurarnos de que solo contenga "0" o "1"
    const validBinary = /^[01]*$/;
    if (validBinary.test(inputValue)) {
      setBinaryInput(inputValue);
    }
  };

  return (
    <div className="binaryDecimal">
      <h2>Binario a decimal</h2>
      <input
        className="inputBinaryDecimal"
        type="text"
        placeholder="Ingrese un número binario"
        value={binaryInput}
        onChange={handleInputChange}
        required
      />

      <button className="convertBinaryDecimal" onClick={handleConvert}>
        Convertir
      </button>
      <p className="outputDecimal">Resultado en decimal: {decimalOutput}</p>
    </div>
  );
};

export default BinaryDecimmal;
