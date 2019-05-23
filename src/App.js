import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './TodoForm';
//import TodoList from './TodoList';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const App = ( ) => {
  return (
    <React.Fragment>
    <Typography variant="h2" align="center">Hello Sexy</Typography>
    
    <Grid container justify="center">
    <TodoForm />
    </Grid>

    <Grid container justify="center">
    <Grid item md={8}>
    {/* <TodoList>
    </TodoList> */}
    </Grid> 
    </Grid>
  </React.Fragment> 
  );
}

export default App;
