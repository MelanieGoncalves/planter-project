import React from 'react';
import './App.css';
import GetData from './components/GetData';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import styles from './styles/appstyles.module.css'

function App() {

  return (
    <div className="App" id={styles.container}>
      <TopBar />
      <div id={styles.sideBar}>
        <SideBar />
      </div>
      <GetData />
    </div>
  );
}

export default App;
