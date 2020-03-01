import React, { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';


import {
  Grid,
  Fab,
  Container,
  InputAdornment,
  Drawer,
  IconButton,
  List,
  ListItem,
  TextField,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';

const useStyles = makeStyles(theme => ({
  appSearchWrapper: {
    padding: theme.spacing(2),
  },
  searchResults: {

  },
  searchHidden: {

  }
}));

const HeaderSearch = () => {
  const searchRef = useRef(null);
  const classes = useStyles();


  const dummySearches1 = ['Analytics', 'Sales', 'Buttons', 'Cards'];

  const dummySearches2 = ['Helpdesk', 'Projects', 'Statistics'];

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchResults) {
        setOpenSearchResults(true);
      }
    } else {
      setOpenSearchResults(false);
    }
  };

  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [state, setState] = useState(false);

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <Fragment>
      <IconButton
        size="medium"
        onClick={toggleDrawer(true)}
        color="inherit"
        >
        <SearchIcon />
      </IconButton>
      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        
        <Container maxWidth="lg">
          <div
            className={clsx('searchResults', {
              'searchHidden': openSearchResults
            })}>
           
          </div>
          <div
            className={clsx('searchResults', {
              'searchHidden': !openSearchResults
            })}>
    
            <Grid container spacing={3}>
              <Grid sm={6} item>
                <List>
                  {dummySearches1.map(search => (
                    <ListItem
                      button
                      key={search}
                      onClick={toggleDrawer(false)}>
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary={search} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid sm={6} item>
                <List>
                  {dummySearches2.map(search => (
                    <ListItem
                      button
                      key={search}
                      onClick={toggleDrawer(false)}>
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary={search} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Drawer>
    </Fragment>
  );
};

export default HeaderSearch;
