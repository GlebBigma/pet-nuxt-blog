<template>
  <div class="max-w-7xl mx-auto p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <BlogCard
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :category="post.category"
          :date="post.createdAt"
          :imageSrc="post.imgSrc"
          class="h-full"
      />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app';
import BlogCard from '../../components/BlogCard.vue';

const { data: posts, error } = useFetch('/api/posts');

if (error.value) {
  console.error('Error fetching posts:', error.value);
}
</script>
