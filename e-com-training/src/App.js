import React, { createContext } from 'react';
import './App.css';
import { Main } from './pages/main';

export const ThemeContext = createContext(null);

function App() {
  return (
      <Main />
  );
}

export default App;
