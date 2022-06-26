import { AppBar, Typography } from '@material-ui/core';
import { FC } from 'react';
import useStyles from './Navbar.styles';
import memories from '../../images/memories.png';

const Navbar: FC<any> = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="memories" />
    </AppBar>
  );
};

export { Navbar };
