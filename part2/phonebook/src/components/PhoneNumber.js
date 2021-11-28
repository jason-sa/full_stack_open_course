import React from "react";

const PhoneNumber = ({ name, number, onClick }) => (
    <li>{name} {number} <button onClick={onClick}>delete</button></li>
)

export default PhoneNumber