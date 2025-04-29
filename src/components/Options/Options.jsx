import React from "react";

const Options = ({ fn, t }) => {
  return (
    <section>
      <button onClick={() => fn("good")}>Good</button>&nbsp;
      <button onClick={() => fn("neutral")}>Neutral</button>&nbsp;
      <button onClick={() => fn("bad")}>Bad</button>&nbsp;
      {t ? <button onClick={() => fn("reset")}>Reset</button> : ""}
    </section>
  );
};

export default Options;
