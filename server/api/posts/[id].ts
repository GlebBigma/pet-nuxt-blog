import posts from '../../data/test.json';

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params?.id || '', 10);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: `Post with ID ${id} not found`,
    });
  }

  return post;
});
