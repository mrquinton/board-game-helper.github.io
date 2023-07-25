import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoardDisplay from './components/boardDisplay';
import { board } from './board/board';

function App() {
  return <BoardDisplay board={board}/>
}

export default App;
