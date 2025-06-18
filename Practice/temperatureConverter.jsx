import { useState } from "react";

export default function App() {
  const [cel, setCel] = useState(0);
  const [far, setFar] = useState(0);

  const handleFar = (e) => {
    setFar(e.target.value);
    setCel(((Number(e.target.value) - 32) * 5) / 9);
  };

  const handleCel = (e) => {
    setCel(e.target.value);
    setFar((Number(e.target.value) * 9) / 5 + 32);
  };

  return (
    <div>
      <div>
        <input id="cel" type="number" value={cel} onChange={handleCel} />
        <label for="cel">{"Celsius"}</label>
      </div>

      <span>=</span>

      <div>
        <input id="far" type="number" value={far} onChange={handleFar} />
        <label for="far">{"Farenheit"}</label>
      </div>
    </div>
  );
}
