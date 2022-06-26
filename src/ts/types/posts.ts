export type Post = {
  _id?: string;
  createdAt?: Date;
  creator: string;
  title: string;
  message: string;
  selectedFile: string;
  tags: string[];
  likeCount?: number;
};

export type Posts = Post[];
