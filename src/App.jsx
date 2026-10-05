import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-5 rounded shadow w-64">
        <h1 className="text-center text-xl mb-2">Calculator</h1>

        <input
          className="w-full p-2 mb-3 border text-right"
          value={input}
          readOnly
        />

        <div className="grid grid-cols-4 gap-2">
          {"1234567890+-*/".split("").map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="p-2 bg-blue-400 text-white rounded"
            >
              {item}
            </button>
          ))}

          <button onClick={clear} className="bg-red-400 p-2 col-span-2 rounded">C</button>
          <button onClick={calculate} className="bg-green-400 p-2 col-span-2 rounded">=</button>
        </div>
      </div>
    </div>
  );
}