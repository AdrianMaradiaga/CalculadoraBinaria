import React, { useState } from "react";
import './BinaryDecimal.css'

const BinaryDecimmal = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState("");

  const handleConvert = () => {
    const binaryNumber = binaryInput;
    const decimalNumber = binaryToDecimal(binaryNumber);

    setDecimalOutput(decimalNumber);
  };

  const binaryToDecimal = (binary) => {
    const binaryArray = binary.split("").reverse();
    let decimal = 0;

    for (let i = 0; i < binaryArray.length; i++) {
      const bit = parseInt(binaryArray[i]);
      decimal += bit * Math.pow(2, i);
    }

    return decimal;
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

      <button  className="convertBinaryDecimal"  onClick={handleConvert}>Convertir</button>
      <p className="outputDecimal">Resultado en decimal: {decimalOutput}</p>
    </div>
  );
};

export default BinaryDecimmal;
