import React, { useState } from "react";
import './BinaryOctal.css'

const BinaryOctal = () => {
  // Estado para el valor binario de entrada
  const [binaryInput, setBinaryInput] = useState("");
  // Estado para el valor octal de salida
  const [octalOutput, setOctalOutput] = useState("");

  // Función para manejar la conversión de binario a octal
  const handleConvert = () => {
    // Obtenemos el valor binario de entrada
    const binaryNumber = binaryInput;
    // Realizamos la conversión llamando a la función binario_a_octal
    const octalNumber = binario_a_octal(binaryNumber);
    // Actualizamos el estado del valor octal de salida
    setOctalOutput(octalNumber);
  };

  // Función para convertir un número binario a octal
  const binario_a_octal  = (binary) => {
    // Primero, convertimos el número binario a decimal
    const decimalNumber = parseInt(binary, 2); // Convierte de binario a decimal
    // Luego, convertimos el número decimal a octal
    const octalNumber = decimalNumber.toString(8); // Convierte de decimal a octal

    return octalNumber; // Devolvemos el valor octal resultante
  };

  // Función para manejar cambios en la entrada binaria
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Usamos una expresión regular para asegurarnos de que solo contenga "0" o "1"
    const validBinary = /^[01]*$/;
    if (validBinary.test(inputValue)) {
      // Actualizamos el estado del valor binario de entrada
      setBinaryInput(inputValue);
    }
  };

  return (
    <div className="binaryOctal">
      <h2>Binario a octal</h2>
      <input
        className="inputBinaryOctal"
        type="text"
        placeholder="Ingrese un número binario"
        value={binaryInput}
        onChange={handleInputChange}
        required
      />

      <button className="convertBinaryOctal" onClick={handleConvert}>
        Convertir
      </button>
      <p className="outputOctal">Resultado en octal: {octalOutput}</p>
    </div>
  );
};

export default BinaryOctal;
