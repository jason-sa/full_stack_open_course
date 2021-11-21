import React from "react";

const Total = ({ parts }) => {
    return (
      <b>Total of {parts.reduce((currentSum, part) => currentSum + part.exercises, 0)} exercises</b>
    )
  }

export default Total