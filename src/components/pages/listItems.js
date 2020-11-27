import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PublishIcon from '@material-ui/icons/Publish';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/uploadfile">
      <ListItemIcon>
        <PublishIcon />
      </ListItemIcon>
      <ListItemText primary="Upload A file" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="My Bills" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Prescriptions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="My Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Select files to share" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Extra Tools</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Remove a File" />
    </ListItem>

  </div>
);

export const thirdListItems = (
  <div>
    <ListItem button component={Link} to="/uploadfile">
      <ListItemIcon>
        <PublishIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Document" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="View recent files" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Show patients" />
    </ListItem>

  </div>
);

export const fourthListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PublishIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Document" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="View Bill" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="View recent files" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Show Customers" />
    </ListItem>

  </div>
);
