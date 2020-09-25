import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Zones from './Zones';
import Vegetables from './Vegetables';
import Home from './Home';
import { IconButton, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Flowers() {
  const classes = useStyles();
    return (
      <div>
        <Container style={{paddingTop: "40px"}}>
          <form>
          <input type="text"/>
            <IconButton>
              <SearchIcon />
              </IconButton>
          </form>

          

          
        </Container>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/zones" component={props => <Zones {...props} />} />
          <Route path="/vegetables" component={props => <Vegetables {...props} />} />
        </Switch>
      </div>
    )
}

export default Flowers

