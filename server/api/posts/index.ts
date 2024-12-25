import posts from '../../data/test.json';
import { Post } from '~/types/post';

export default defineEventHandler(() => {
  return posts as Post[];
});
