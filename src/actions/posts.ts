import { AppThunk } from '../store';
import * as api from '../api';
import {
  addPost,
  updateCurrentPost,
  setPosts,
  removePost,
} from '../store/reducers/posts';
import { Post } from '../ts/types';

export const getPosts = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch(setPosts(data));
  } catch (err: any) {
    console.log(err.message);
  }
};

export const createPost =
  (post: Post): AppThunk =>
  async (dispatch) => {
    try {
      const { data } = await api.createPost(post);

      dispatch(addPost(data));
    } catch (err: any) {
      console.log(err.message);
    }
  };

export const updatePost =
  (id: string, post: Post): AppThunk =>
  async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch(updateCurrentPost(data));
      // dispatch(setCurrentPost(id));
    } catch (err: any) {
      console.log(err.message);
    }
  };

export const deletePost =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const { data } = await api.deletePost(id);
      dispatch(removePost(data.removedId));
    } catch (err: any) {
      console.log(err);
    }
  };
