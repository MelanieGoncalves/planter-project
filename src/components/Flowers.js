import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Zones from './Zones';
import Vegetables from './Vegetables';
import Home from './Home';
import { 
  IconButton, Container, TextField,
  Box, TableContainer, Paper, Table, 
  TableHead, TableRow, TableCell,
  TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'

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
  const [search, setSearch]  = useState(' ')
  const [searchParameter, setSearchParameter] = useState('')
  const [searchReturn, setSearchReturn] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`/api/v1/plants/search?token=${process.env.REACT_APP_API_KEY}&q=${searchParameter}`)
          .then(res => {
            console.log(res.data.data)
             setPosts(res.data.data.filter( (el, index) => index === res.data.data.findIndex( elem => elem.common_name === el.common_name && elem.id === el.id)))
            
          }).catch(err => {
              console.log(err)
          }) 
  }, [search])

  const handleSubmit= e => {
    console.log(searchParameter)
    setSearchReturn(searchParameter.length > 0 ? true : false)
    setSearch(searchParameter)
  }

    return (
      <div>
        <Container style={{paddingTop: "40px"}}>
          <form > 
          <TextField id="outlined-basic" label="Search for a plant..." variant="outlined" defaultValue={searchParameter} onChange={e => setSearchParameter(e.target.value)}/>
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
              </IconButton>
          </form> 

          <Box style={{height: "300px"}}> 
          { searchReturn &&
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
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

