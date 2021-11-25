import React from "react";

const Filter = ( { text, searchValue, onChange }) => (
    <div>
        {text} <input value={searchValue} onChange={onChange} />
    </div>

)

export default Filter