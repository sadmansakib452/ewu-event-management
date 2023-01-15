import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from 'react-router-dom'


export const mainListItems = (
  <React.Fragment>

  <Link to="/dashboard" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </Link>

  <Link to="myEvent" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Events" />
    </ListItemButton>
  </Link>

    <Link to="allUser" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <GroupsIcon/>
      </ListItemIcon>
      <ListItemText primary="All User"/>
    </ListItemButton>
   </Link>

   

    <Link to="addEvent" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Add Event" />
    </ListItemButton>
    </Link>

    <Link to="allEvent" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <PendingActionsIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItemButton>
  </Link>
  
    <Link to="addSupplier" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <NoCrashIcon />
      </ListItemIcon>
      <ListItemText primary="Add Supplier" />
    </ListItemButton>
  </Link>
    <Link to="allSupplier" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <LocalShippingIcon />
      </ListItemIcon>
      <ListItemText primary="Suppliers" />
    </ListItemButton>
  </Link>
  
   

  
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    
    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Back to Home" />
    </ListItemButton>
    </Link>
   
  </React.Fragment>
);