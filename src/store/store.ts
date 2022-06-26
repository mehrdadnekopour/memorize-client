import { Action, configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/posts';
import { ThunkAction } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
