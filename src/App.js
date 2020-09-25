import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import styles from './styles/appstyles.module.css';
import {  Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiGrid: {
      // Name of the rule
      container: {
        // Some CSS
        height: 'calc(100% - 53px)',
      },
    },
  },
});

function App() {

  return (
    <div>
      <TopBar />
      <ThemeProvider theme={theme}>
      <Grid container styles={{height: "100%"}}>
        <Grid item>
          <div id={styles.sideBar}>
            <SideBar />
          </div>
        </Grid>
        <Grid item xs zeroMinWidth>
          <MainContainer />
        </Grid>
      </Grid>
      </ThemeProvider>
      
    </div>
  )
}

export default App;
