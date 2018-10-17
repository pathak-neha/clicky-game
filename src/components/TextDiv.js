import React from "react";

const TextDiv = props => (
    <span>{props.info.guess === "null" ? "CLICK AN IMAGE TO BEGIN" : props.info.guess}</span>
);

export default TextDiv;
