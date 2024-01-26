import  { useState } from "react";
import "../style/CharacterSats.css";
import { InputText } from 'primereact/inputtext';
        


export default function CharacterSats() {
  const storedData = localStorage.getItem("characterSats");
  const initialCharacterSats = storedData ? JSON.parse(storedData) : {
    name: "Gandalf",
    strength: 10,
    intelligent: "18",
    charisma: 16,
  };

  const [characterSats, setCharacterSats] = useState(initialCharacterSats);

  function handleChange(e:any) {
    setCharacterSats({
      ...characterSats,
      [e.target.name]: e.target.value,
    });

    localStorage.setItem("characterSats", JSON.stringify({
      ...characterSats,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="character-sats-container">
      {storedData ? (
        <p>Variables en el local storage</p>
      ) : (
        <p>Sin variables en el local storage</p>
      )}

      <form>
        <label>
          <em>Name :</em>
          <InputText
            type="text"
            name="name"
            value={characterSats.name}
            onChange={handleChange}
          />
        </label>

        <label>
          <em>Strength: </em>
          <InputText
            type="number"
            name="strength"
            value={characterSats.strength}
            onChange={handleChange}
          />
        </label>

        <label>
          
        <em>Intelligent: </em>
          <InputText
            type="text"
            name="intelligent"
            value={characterSats.intelligent}
            onChange={handleChange}
          />
        </label>

        <label>
          <em>Charisma :</em>
          <InputText
            type="number"
            name="charisma"
            value={characterSats.charisma}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}


