import React, { useStyles } from 'react'

import {
    List, ListItem, ListItemIcon, ListItemText, Drawer,
    MenuItem, MenuList, Divider, IconButton, Typography
} from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SpaIcon from '@material-ui/icons/Spa';
import {
    BrowserRouter as Router,
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Zones from './Zones';
import Vegetables from './Vegetables';



function SideBar() {
    // const classes = useStyles();
    return (

        <BrowserRouter>
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


                {/* <Route path="/zones" component={Zones} />
                <Route path="/vegetables" component={Vegetables} /> */}


            </div>
        </BrowserRouter>




    )
}

export default SideBar
