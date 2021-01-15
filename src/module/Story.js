import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        
	},
}));

function Story() {
  const styling = useStyles();
  return (
    <div className={styling.root}>
      <ImageCard/>
    </div>
  );
}

export default Story;
