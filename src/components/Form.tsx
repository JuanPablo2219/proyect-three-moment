import  { useState } from "react";
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import "../style/CharacterSats.css"; 

export default function CharacterSats() {
  const storedData = localStorage.getItem("characterSats");
  const initialCharacterSats = storedData
    ? JSON.parse(storedData)
    : {
        name: "Gandalf",
        strength: 10,
        intelligent: "18",
        charisma: 16,
      };

  const [characterSats, setCharacterSats] = useState(initialCharacterSats);

  const handleChange = (e:any) => {
    setCharacterSats({
      ...characterSats,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Guarda datos en el local storage
    localStorage.setItem("characterSats", JSON.stringify(characterSats));
    alert("Cambios Guardados en el LocalStorage ✔️");
  };

  return (
    <div className="character-sats-container">
      {storedData ? (
        <p>Variables en el local storage</p>
      ) : (
        <p>Sin Variables en el local storage</p>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <InputText
            type="text"
            name="name"
            value={characterSats.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Strength:
          <InputText
            type="number"
            name="strength"
            value={characterSats.strength}
            onChange={handleChange}
          />
        </label>

        <label>
          Intelligent:
          <InputText
            type="text"
            name="intelligent"
            value={characterSats.intelligent}
            onChange={handleChange}
          />
        </label>

        <label>
          Charisma:
          <InputText
            type="number"
            name="charisma"
            value={characterSats.charisma}
            onChange={handleChange}
          />
        </label>

        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
