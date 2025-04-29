import { React, useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notifcation from "./components/Notification/Notification";

function App() {
  /** set state, check localStorage, set default value */
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    if (localData !== null) return JSON.parse(localData);
    return {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    };
  });

  /** set data into localStorage */
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
  }, [data]);

  // update
  const updateFeedback = (updateType) => {
    // reset handle
    if (updateType === "reset") {
      return resetAllData();
    }
    // counters
    setData({
      ...data,
      [updateType]: data[updateType] + 1,
      ["total"]: data["good"] + data["neutral"] + data["bad"],
    });
  };

  // reset data
  const resetAllData = () => {
    if (localStorage.getItem("data") !== null) {
      localStorage.removeItem("data");
    }
    setData({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    });
  };

  return (
    <>
      <Description />
      <Options fn={updateFeedback} data={data} />
      {data.total ? <Feedback data={data} /> : <Notifcation />}
    </>
  );
}

export default App;
