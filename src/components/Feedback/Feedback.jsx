import React from "react";

const Feedback = ({ data }) => {
  const { good, neutral, bad, total } = data;

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
