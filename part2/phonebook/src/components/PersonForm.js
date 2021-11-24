import React from "react";

const PersonFormInput = ({ text, value, onChange }) => (
    <div>
        {text} <input value={value} onChange={onChange} />
    </div>
)

const PersonForm = ({ onSubmit, personInputs }) => (
    <form onSubmit={onSubmit}>
        {personInputs.map((personInput, i) => <PersonFormInput key={i} {...personInput} />)}
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm