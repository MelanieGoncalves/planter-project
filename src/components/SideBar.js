import React, { useStyles } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SpaIcon from '@material-ui/icons/Spa';
import { BrowserRouter, Link } from 'react-router-dom';


function SideBar() {
  return (
    <div >
      <List >
        <ListItem button component={Link} to="/zones">
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Zones" />
        </ListItem>
        <ListItem button component={Link} to="/flowers">
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Flowers" />
        </ListItem>
        <ListItem button component={Link} to="/vegetables">
          <ListItemIcon>
            <SpaIcon />
          </ListItemIcon>
          <ListItemText primary="Vegetables" />
        </ListItem>
      </List>
    </div>
  )
}

export default SideBar
