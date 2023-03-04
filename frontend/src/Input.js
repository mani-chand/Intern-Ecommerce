import React from "react";
export default function Input({ objValue, onChange, index ,deleteField}) {
  const { label, type, value } = objValue;
  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <input
          type={type || "text"}
          id={label}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
         <button onClick={(e) => deleteField(e, index)}>delete</button>
      </div>
    </div>
  );
}