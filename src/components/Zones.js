import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Vegetables from './Vegetables';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Box, InputLabel, MenuItem, Select, Container} from '@material-ui/core';
import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));

function Zones() {
  const classes = useStyles();
  const [posts, setPosts] = useState({})
  const [zone, setZone] = useState(1);
  const [zoneFromSelect, setZoneFromSelect] = useState(1)


  const handleChange = () => {
    setZoneFromSelect(zone)


  }

  useEffect(() => {
    const fetchData = async () => {
      Axios.get('/api/v1/distributions/9/plants?token=' + process.env.REACT_APP_API_KEY)
        .then(response => {
          console.log(response.data.data)
          setPosts(response.data.data)
        }).catch(err => {
          console.log(err)
        });


    };
    fetchData();
  }, [zoneFromSelect])

  return (
      <Container style={{height: "100%", paddingTop: "40px"}}>
      <Grid container justify="flex-start" style={{height: "50%"}} spacing={3}>       
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel> Select Zone</InputLabel>
            <Select onChange={handleChange} >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
           
        <Grid item>
          <img 
              style={{
                minHeight: "200px",
              height: "80%",
              border: "2px solid black"}}
              alt="hardiness zone map" 
              src="https://opimedia.azureedge.net/-/media/images/grt/editorial/articles/online-articles/2011/06-01/understanding-zones/plant_hardiness_zone_map_19.jpg"
              />
        </Grid>
        </Grid>
        <Grid container>
       
        <Grid item>
          <Box style={{height: "300px"}}> TEST
          </Box>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vegetables" component={props => <Vegetables {...props} />} />
        <Route path="/flowers" component={props => <Flowers {...props} />} />
      </Switch>
      </Container>
  )

}



export default Zones
