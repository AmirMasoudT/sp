import { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const useSelection = () => useContext(SelectionContext);
export const SelectionProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);

  return (
    <SelectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectionContext.Provider>
  );
};
