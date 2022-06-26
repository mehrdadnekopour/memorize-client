import { FC } from 'react';
import { CircularProgress, Grid, Grow } from '@material-ui/core';

import { Posts } from '../../ts/types';
import useStyles from './Posts.styles';
import { Post } from './Post/Post';

const PostsLayout: FC<{ posts: Posts }> = ({ posts }) => {
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.mainContainer} container alignItems="stretch">
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsLayout;
