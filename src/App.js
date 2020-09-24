import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import styles from './styles/appstyles.module.css';
import { Grid } from '@material-ui/core';


function App() {

  return (
    <div>
      <TopBar />
      <Grid container wrap="nowrap">
        <Grid item>
          <div id={styles.sideBar}>
            <SideBar />
          </div>
        </Grid>
        <Grid item xs zeroMinWidth>
          <MainContainer />
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
