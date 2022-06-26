import { FC, FormEvent, useEffect, useState } from 'react';
import { createPost, updatePost } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentPost } from '../../store/reducers/posts';
import { Post } from '../../ts/types';
import FormLayout from './Form.layout';

const initialPostData: Post = {
  creator: '',
  title: '',
  message: '',
  selectedFile: '',
  tags: [],
};

const Form: FC<any> = () => {
  const [postData, setPostData] = useState<Post>(initialPostData);
  const dispatch = useAppDispatch();

  const selectedPost = useAppSelector((state) => state.posts.selectedItem);

  useEffect(() => {
    setPostData(selectedPost || initialPostData);
  }, [selectedPost]);

  const handleChangeInput = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = postData._id;

    if (!id) {
      // adding a new memory
      dispatch(createPost(postData));
    } else {
      // updating an existing one
      dispatch(updatePost(id, postData));
    }
    setPostData(initialPostData);
  };
  const handleReset = () => {
    setPostData(initialPostData);
    dispatch(setCurrentPost(''));
  };

  return (
    <FormLayout
      postData={postData}
      isNew={!postData._id}
      handleChangeInput={handleChangeInput}
      onSubmit={handleSubmit}
      onResetForm={handleReset}
    />
  );
};

export { Form };
