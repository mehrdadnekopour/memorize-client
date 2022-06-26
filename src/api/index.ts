import axios from 'axios';
import { Post } from '../ts/types';

const url = 'http://10.0.0.128:5454/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (post: Post) => axios.post(url, post);
export const updatePost = (id: string, post: Post) =>
  axios.patch(`${url}/${id}`, post);
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
