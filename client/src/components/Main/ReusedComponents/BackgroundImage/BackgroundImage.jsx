import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './style'

const BackgroundImage = ({image}) => {
    const {text,text_color, url,overlay_color} = image
  const classes = useStyles();

  return (
    <Paper className={classes.backgroundImagePaper} style={{ backgroundImage: `url(${url})` }}>
    <div className={classes.overlay} style = {{backgroundColor:overlay_color}}/>
    <Grid container className = {classes.backgroundImageTextContainer}>
    <Typography component="h1" variant="h3" className = {classes.backgroundImageText} style = {{color: text_color}}>
            {text}
          </Typography>
    </Grid>
  </Paper>
  );
}

export default BackgroundImage