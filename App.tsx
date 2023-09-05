import Heading from "./components/Heading";
import "./App.css";
import React, { useState } from "react";
import Entry from "./components/Entry";

function App() {
  const [entry, setEntry] = useState(["div"]);
  function handleEntry() {
    const current = [...entry];
    current.push("newDiv");
    setEntry(current);
  }
  return (
    <div className="scheduleBackground">
      <Heading>Schedule</Heading>
      {entry?.map(() => {
        return (
          <>
            <Entry onClick={handleEntry} />
          </>
        );
      })}
    </div>
  );
}

export default App;
