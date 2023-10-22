import React, { useState } from "react";
import './BinaryHexadecimal.css'

const BinaryHexadecimal = () => {
  const [binaryInput, setBinaryInput] = useState(""); // Estado para el valor binario de entrada
  const [hexadecimalOutput, setHexadecimalOutput] = useState(""); // Estado para el valor hexadecimal de salida

  const handleConvert = () => {
    const binaryNumber = binaryInput;
    const hexadecimalNumber = binario_a_hexadecimal(binaryNumber);

    setHexadecimalOutput(hexadecimalNumber);
  };

  // Función para convertir un número binario a hexadecimal
  const binario_a_hexadecimal = (binary) => {
    // Primero, convertimos el número binario a decimal
    const decimalNumber = parseInt(binary, 2); // Convierte de binario a decimal
    // Luego, convertimos el número decimal a hexadecimal
    const hexadecimalNumber = decimalNumber.toString(16); // Convierte de decimal a hexadecimal

    return hexadecimalNumber; // Devolvemos el valor hexadecimal resultante
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const validBinary = /^[01]*$/;
    if (validBinary.test(inputValue)) {
      // Actualizamos el estado del valor binario de entrada si es válido (solo contiene 0 y 1)
      setBinaryInput(inputValue);
    }
  };

  return (
    <div className="binaryHexadecimal">
      <h2>Binario a hexadecimal</h2>
      <input
        className="inputBinaryHexadecimal"
        type="text"
        placeholder="Ingrese un número binario"
        value={binaryInput}
        onChange={handleInputChange}
        required
      />

      <button className="convertBinaryHexadecimal" onClick={handleConvert}>
        Convertir
      </button>
      <p className="outputHexadecimal">Resultado en hexadecimal: {hexadecimalOutput}</p>
    </div>
  );
};

export default BinaryHexadecimal;
