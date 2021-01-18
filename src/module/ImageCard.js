import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        maxWidth: '100vw',
    },
    root: {
        maxWidth: '90vw',
        // Breakpoint sm aktivoituu 600px < koossa
        [theme.breakpoints.up('sm')]: {
            maxWidth: '65vw',
        },
        
    },
    media: {
        height: 440,
    },
    title: {

    },
    /*
    margin1: {
      margin: 'auto',
      maxWidth: '2vw',
    },
    margin2: {
      margin: 'auto',
      maxWidth: '2vw',
    }
    */
}));

export default function ImageCard( {para} ) {
    const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <div className={classes.margin1}/>
      <Card className={classes.root}>
      
          <CardMedia
              className={classes.media}
              image={para.pic}
              title={para.pde}
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                  {para.hea}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  {para.tex}
              </Typography>
          </CardContent>
      </Card>
      <div className={classes.margin2}/>
    </div>
      

      
  );
}
