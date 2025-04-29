import { React, useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notifcation from "./components/Notification/Notification";

function App() {
  const SDCK = "data-counts";
  /** set COUNTS default value, check localStorage, set default value */
  const [data, setData] = useState(() => {
    const localDataCounts = localStorage.getItem(SDCK);
    if (localDataCounts !== null) return JSON.parse(localDataCounts);
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  /** set data into localStorage */
  useEffect(() => {
    localStorage.setItem(SDCK, JSON.stringify(data));
  }, [data]);

  /** calculate total feedback */
  const totalFeedback = data.good + data.neutral + data.bad;

  /** calculate positive feedback */
  const positiveFeedback = totalFeedback
    ? Math.round((data.good / totalFeedback) * 100)
    : 0;

  /** update */
  const updateFeedback = (updateType) => {
    if (updateType === "reset") {
      return resetAllData();
    } // reset handle
    setData({
      ...data,
      [updateType]: data[updateType] + 1,
    }); // counters
  };

  /** reset data */
  const resetAllData = () => {
    if (localStorage.getItem(SDCK) !== null) {
      localStorage.removeItem(SDCK);
    }
    setData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options fn={updateFeedback} t={totalFeedback} />
      {totalFeedback ? (
        <Feedback data={data} pf={positiveFeedback} />
      ) : (
        <Notifcation />
      )}
    </>
  );
}

export default App;
