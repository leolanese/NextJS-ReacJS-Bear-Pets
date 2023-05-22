import React, { createContext, useReducer, useContext } from "react";

const initialState = { theme: 'bg-gray-500', color: 'text-red-500' };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { 
                theme: state.theme === 'bg-gray-500' ? 'bg-slate-800' : 'bg-gray-500',
                color: state.color === 'text-red-500' ? 'text-green-500' : 'text-red-500',
             };
    default:
      throw new Error();
  }
}

export const ThemeContext = createContext({
    state: initialState,
    dispatch: (action: { type: string }) => {}
  });

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if(context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context;
}
