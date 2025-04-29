import React from "react";

const Feedback = ({ data, total }) => {
  const { good, neutral, bad } = data;

  return (
    <section>
      <p>Goog: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {Math.round((good / total) * 100)}%</p>
    </section>
  );
};

export default Feedback;
