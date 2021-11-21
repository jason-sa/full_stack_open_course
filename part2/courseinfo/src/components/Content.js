import React from "react";
import Part from "./Part";

const Content = ({ parts }) => <> {parts.map((part) => <Part key={part.id} {...part} />)} </>

export default Content;