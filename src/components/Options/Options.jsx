import React from "react";

const Options = ({ fn, total }) => {
  return (
    <section>
      <button onClick={() => fn("good")}>Good</button>&nbsp;
      <button onClick={() => fn("neutral")}>Neutral</button>&nbsp;
      <button onClick={() => fn("bad")}>Bad</button>&nbsp;
      {total ? <button onClick={() => fn("reset")}>Reset</button> : ""}
    </section>
  );
};

export default Options;
