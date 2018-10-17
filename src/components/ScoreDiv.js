import React from "react";

const ScoreDiv = props => (
  <span>SCORE: {props.info.score} | TOP SCORE: {props.info.topScore}</span>
);

export default ScoreDiv;
