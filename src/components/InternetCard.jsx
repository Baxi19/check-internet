import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { Wifi, WifiOff } from '@material-ui/icons';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Offline, Online } from "react-detect-offline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 340,
    textAlign: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const InternetCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Internet Status
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Online>You're Online</Online>
            <Offline>You're Offline</Offline>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <Online><Wifi className={classes.playIcon} /></Online>
            <Offline><WifiOff className={classes.playIcon} /></Offline>
          </IconButton>
        </div>
      </div>
      <Offline><CardMedia
        className={classes.cover}
        image="https://cdn.pixabay.com/photo/2018/04/28/16/40/network-3357642__340.jpg"
        title="Offline"
      /></Offline>
      <Online><CardMedia
        className={classes.cover}
        image="https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062_960_720.jpg"
        title="Online"
      /></Online>
    </Card>
  );
}

export default InternetCard;