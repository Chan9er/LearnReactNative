import React, { useState, createContext } from 'react';

const FoodContext = createContext();

const FoodProvider = props => {
  const [name, setName] = useState('hamburger');
  const [calories, setCalories] = useState('80');

  return (
    <FoodContext.Provider
      value={{
        name,
        calories,
        setName,
        setCalories,
      }}>
      {props.children}
    </FoodContext.Provider>
  );
};

export { FoodProvider, FoodContext };
