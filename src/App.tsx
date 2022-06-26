import { FC } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { Posts, Form, Navbar } from './components';

import useStyles from './styles';

const App: FC<any> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
