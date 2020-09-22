import React from 'react';
import './App.css';
import GetData from './components/GetData';
import TopBar from './components/TopBar';

function App() {

  return (
    <div className="App">
      <TopBar />
      <GetData />
    </div>
  );
}

export default App;
