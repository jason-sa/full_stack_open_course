import React from "react";

const Filter = ( { searchValue, onChange }) => (
    <div>
        filter shown with <input value={searchValue} onChange={onChange} />
    </div>

)

export default Filter