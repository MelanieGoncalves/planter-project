import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Vegetables from './Vegetables';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Box, 
    InputLabel, MenuItem, Select, 
    Container, Button, TableContainer,
    Paper, Table, TableBody, TableRow,
    TableCell, TableHead, FormLabel, Typography } from '@material-ui/core';
import axios from 'axios'


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
  const [posts, setPosts] = useState([])
  const [zone, setZone] = useState(1);
  const [zoneFromSelect, setZoneFromSelect] = useState(1)
  const [display, setDisplay] = useState(true)


  const handleClick = () => {
    setZoneFromSelect(zone)
  }


 
  useEffect(() => {
   setPosts([])
   
    axios.get(`/api/v1/distributions/${zone}/plants?token=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
          console.log(res.data.data)
            setPosts(res.data.data.filter( (el, index) => index === res.data.data.findIndex( elem => elem.common_name === el.common_name && elem.id === el.id)))
          
        }).catch(err => {
            console.log(err)
        })
  }, [zoneFromSelect, zone])

  return (
      <Container style={{height: "100%", paddingTop: "40px"}}>
      <Grid container justify="flex-start" style={{height: "45%"}} spacing={3}>      
        <Grid item>
          <Typography>Hardiness Zones are the USDA standards for determining where plants will thrive most based on climate.</Typography>
          <Typography>Select the zone you live in to see plants that are recommended for your area.</Typography>
        </Grid>
        <Grid container spacing={3}>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel> Select Zone</InputLabel>
            <Select value={zone} onChange={e => setZone(e.target.value)} >
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
            <Button style={{marginTop: "30px"}} variant="contained" onClick={handleClick}>See Plants</Button>
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
        
        </Grid>
        <Grid container spacing={3}>
       
        <Grid item>
          <Box style={{height: "300px"}}> 
          {(zoneFromSelect > 1) &&
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead style={{backgroundColor: "gray"}}>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">FAMILY</TableCell>
                <TableCell align="right">GENUS</TableCell>
                <TableCell align="right">YEAR</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell component="th" scope="row">
                    {post.common_name}
                  </TableCell>
                  <TableCell align="right"><img style={{width: '100px', height: '100px'}}alt="plant image" src={post.image_url}/></TableCell>
                  <TableCell align="right">{post.family_common_name}</TableCell>
                  <TableCell align="right">{post.genus}</TableCell>
                  <TableCell align="right">{post.year}</TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          // <ul>
          //       {posts.map(post => <li key={post.id}>{post.common_name}</li>)}
          //   </ul> 
        }
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
