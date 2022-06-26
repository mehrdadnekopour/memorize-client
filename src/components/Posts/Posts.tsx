import { FC, useEffect } from 'react';
import { getPosts } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Post } from './Post';
import PostsLayout from './Posts.layout';

const Posts: FC<any> = () => {
  const posts = useAppSelector((state) => state.posts.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <PostsLayout posts={posts} />;
};

export { Posts };
