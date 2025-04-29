import { React, useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notifcation from "./components/Notification/Notification";

function App() {
  const SDCK = "data-counts";
  const STK = "data-total";

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

  /** set TOTAL default value, check localStorage, set default value */
  const [total, setTotal] = useState(() => {
    const localDataTotal = localStorage.getItem(STK);
    if (localDataTotal !== null) return JSON.parse(localDataTotal);
    return 0;
  });

  /** set data into localStorage */
  useEffect(() => {
    localStorage.setItem(SDCK, JSON.stringify(data));
    setTotal(data["good"] + data["neutral"] + data["bad"]);
  }, [data]);

  useEffect(() => {
    localStorage.setItem(STK, JSON.stringify(total));
  }, [total]);

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
    });
  };

  // reset data
  const resetAllData = () => {
    if (localStorage.getItem(SDCK) !== null) {
      localStorage.removeItem(SDCK);
    }
    if (localStorage.getItem(STK) !== null) {
      localStorage.removeItem(STK);
    }
    setData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setTotal(0);
  };

  return (
    <>
      <Description />
      <Options fn={updateFeedback} total={total} />
      {total ? <Feedback data={data} total={total} /> : <Notifcation />}
    </>
  );
}

export default App;
