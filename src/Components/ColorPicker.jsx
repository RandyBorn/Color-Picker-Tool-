import React from "react";
import { useState } from "react";
export default function ColorPicker() {
  const [color, setColor] = useState("#000000");
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <h1 className="bg-slate-400 h-12 flex items-center justify-center text-2xl font-bold text-white">
        Herzlich Wilkommen zur Farbauswahl
      </h1>
      <div style={{ padding: "120px" }}>
        <h2>Wähle eine Farbe</h2>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          style={{ cursor: "pointer", width: "300px", height: "200px" }}
        />
        <div style={{ marginTop: "20px" }}>
          <p>
            Aktuelle Farbe: <span style={{ color: color }}>{color}</span>
          </p>
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            marginTop: "10px",
          }}
        />
      </div>
      ;
    </>
  );
}
