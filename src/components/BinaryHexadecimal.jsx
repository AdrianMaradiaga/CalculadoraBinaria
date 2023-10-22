import React, { useState } from "react";
import './BinaryHexadecimal.css'

const BinaryHexadecimal = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [hexadecimalOutput, setHexadecimalOutput] = useState("");

  const handleConvert = () => {
    const binaryNumber = binaryInput;
    const hexadecimalNumber = binario_a_hexadecimal(binaryNumber);

    setHexadecimalOutput(hexadecimalNumber);
  };

  const binario_a_hexadecimal = (binary) => {
    const decimalNumber = parseInt(binary, 2); // Convierte de binario a decimal
    const hexadecimalNumber = decimalNumber.toString(16); // Convierte de decimal a hexadecimal

    return hexadecimalNumber;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const validBinary = /^[01]*$/;
    if (validBinary.test(inputValue)) {
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
