import { useState } from "react";

export function UseForm() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
    </div>
  );
}
