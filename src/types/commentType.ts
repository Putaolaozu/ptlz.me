export type commentType = {
  userName: string;
  userImage: string;
  time: Date;
  text: string;
  replies: commentType[];
  like: number;
  dislike: number;
};
