import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, Posts } from '../../ts/types';
import type { RootState } from '../store';

interface PostsState {
  items: Posts;
  selectedItem: Post | undefined;
}

const initialState: PostsState = {
  items: [],
  selectedItem: undefined,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts>) => {
      state.items = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.items = [action.payload, ...state.items];
    },
    setCurrentPost: (state, action: PayloadAction<string>) => {
      state.selectedItem = state.items.find(
        (post) => post._id === action.payload
      );
    },
    updateCurrentPost: (state, action: PayloadAction<Post>) => {
      state.items = state.items.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((post) => post._id !== action.payload);
    },
  },
});

export const {
  setPosts,
  addPost,
  removePost,
  setCurrentPost,
  updateCurrentPost,
} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts.items;
export const selectPost = (state: RootState) => state.posts.selectedItem;

export default postsSlice.reducer;
