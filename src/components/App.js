import Profile from "./Profile";
import Card from "./Card";

import { useState } from "react";

const categories = ["work", "play", "study", "exercise", "social", "selfCare"]

function App() {

  const [selectedTimeframe, setSelectedTimeframe] = useState("Weekly");

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  return (
    <div className=" space-y-6 md:grid md:grid-cols-4 md:gap-4 md:space-y-0">
      <Profile onTimeframeChange={handleTimeframeChange} />
      {categories.map((category) => (
        <Card key={category} category={category} timeframe={selectedTimeframe} />
      ))}
    </div>
  );
}

export default App;
