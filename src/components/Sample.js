// AsyncComponent.jsx
import React, { useState, useEffect } from "react";

const Sample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an asynchronous operation, like fetching data
    setTimeout(() => {
      setData("Async Data");
    }, 3000);
  }, []);

  return (
    <div>
      {data ? (
        <p data-testid="async-data">{data}</p>
      ) : (
        <p data-testid="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default Sample;
