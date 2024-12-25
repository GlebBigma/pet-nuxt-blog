import posts from '../../data/test.json';
import { Post } from '~/types/post';

const typedPosts: Post[] = posts;

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params?.id || '', 10);
  const post = typedPosts.find((p) => p.id === id);

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: `Post with ID ${id} not found`,
    });
  }

  return post;
});

