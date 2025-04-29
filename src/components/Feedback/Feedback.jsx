import React from "react";

const Feedback = ({ data, pf }) => {
  const { good, neutral, bad } = data;

  return (
    <section>
      <p>Goog: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {pf ? pf : 0} %</p>
    </section>
  );
};

export default Feedback;
