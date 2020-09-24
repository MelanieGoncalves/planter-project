import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Flowers from './Flowers';
import Vegetables from './Vegetables';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FormControl, InputLabel, MenuItem, Select, List, ListItem } from '@material-ui/core';
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
    <div>
      <Box>
        <FormControl className={classes.formControl}>
          <InputLabel>Zone</InputLabel>
          <Select onChange={handleChange} >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>

          </Select>
        </FormControl>


        {/* <ul>
          {
            posts.map(post => <li key={post.id}>{post.common_name}</li>)
          }
        </ul> */}

      </Box>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vegetables" component={props => <Vegetables {...props} />} />
        <Route path="/flowers" component={props => <Flowers {...props} />} />
      </Switch>
    </div>
  )

}



export default Zones
