import React, { useState } from "react";

function InputArea({ onAdd }) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function addItem() {
    onAdd(inputText);
    setInputText("");
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
