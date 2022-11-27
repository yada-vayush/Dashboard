import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
 
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSetting, setThemeSetting] = useState(false);
  const [cart,setCart]=useState(false);
  
  
  const setMode = (e) => {

    setCurrentMode(e.target.value);
    
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
     setThemeSetting(false)
  };

  const handleClick = (click) => {
    setIsClicked({ ...initialState, [click]: true });
  };
  const handleNotClick = (click) => {
    setIsClicked({ ...initialState, [click]: false });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,setCurrentColor,
        currentMode,setCurrentMode,
        setColor,setMode,setThemeSetting,themeSetting,cart,setCart,handleNotClick
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
