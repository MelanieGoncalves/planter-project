import React from 'react';
import './App.css';
import GetData from './components/GetData';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import styles from './styles/appstyles.module.css';
import Flowers from './components/Flowers';
import Zones from './components/Zones';
import Vegetables from './components/Vegetables';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from 'react-router-dom'
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

      <GetData />

    </div>


  )
}

export default App;
