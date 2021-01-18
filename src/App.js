import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './module/Header';
import Story from './module/Story';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
	},
}));

function handleItemClick (value) {
  alert(`value, ${value}`);
}

function App() {
  const styling = useStyles();
  return (
    <div className={styling.root}>
      <CssBaseline/>
      <Header/>
      <Story/>
    </div>
  );
}

export default App;
