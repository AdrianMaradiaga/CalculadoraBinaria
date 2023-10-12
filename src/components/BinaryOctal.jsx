import React, { useState } from "react";
import './BinaryOctal.css'

const BinaryOctal = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [octalOutput, setOctalOutput] = useState("");

  const handleConvert = () => {
    const binaryNumber = binaryInput;
    const octalNumber = binaryToOctal(binaryNumber);

    setOctalOutput(octalNumber);
  };

  const binaryToOctal  = (binary) => {
    const decimalNumber = parseInt(binary, 2); // Convierte de binario a decimal
    const octalNumber = decimalNumber.toString(8); // Convierte de decimal a octal

    return octalNumber;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Usamos una expresión regular para asegurarnos de que solo contenga "0" o "1"
    const validBinary = /^[01]*$/;
    if (validBinary.test(inputValue)) {
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

      <button className="convertBinaryOctal" onClick={handleConvert}>Convertir</button>
      <p className="outputOctal">Resultado en octal: {octalOutput}</p>
    </div>
  );
};

export default BinaryOctal;
