import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './module/Header';
import CardBuilder from './module/CardBuilder';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/kuva8.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
        // Jos haluat paikallaan pysyvän taustan
        backgroundAttachment: 'fixed',
    },
    container: {
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

function App() {
  const styling = useStyles();
  return (
    //<div className={styling.container}>
    <div className={styling.root}>
      <CssBaseline/>
      <Header/>
      <CardBuilder/>
    </div>
    //</div>
  );
}

export default App;
