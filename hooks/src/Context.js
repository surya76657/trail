import React, { useState } from 'react';

export const DataContext = React.createContext({});

export const DataWrapper = props => {
  const [count, setCount] = useState(0);
  const handleCount = data => setCount(data);
  return (
    <DataContext.Provider
      value={{
        state: {
          count
        },
        actions: { handleCount }
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
