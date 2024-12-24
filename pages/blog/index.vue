<template>
  <div class="max-w-7xl mx-auto p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <BlogCard
          v-for="post in blogPosts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :category="post.category"
          :date="post.date"
          :imageUrl="post.imageUrl"
          class="h-full"
      />
    </div>
  </div>
</template>

<script setup>
import BlogCard from '../../components/blog/BlogCard.vue';

// Mock дані блогу
const blogPosts = [
  {
    id: "1",
    title: "How to use Nuxt 3",
    category: "Development",
    date: "2024-12-24",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "2",
    title: "Understanding Vue Composition API",
    category: "Frontend",
    date: "2024-11-15",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "3",
    title: "Tailwind CSS Tips",
    category: "Design",
    date: "2024-10-10",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "4",
    title: "Deploying Nuxt Applications",
    category: "DevOps",
    date: "2024-09-20",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "5",
    title: "Using Pinia in Nuxt 3",
    category: "State Management",
    date: "2024-08-05",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "6",
    title: "Best Practices for Vue 3",
    category: "Development",
    date: "2024-07-15",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "7",
    title: "Nuxt 3 Middleware Explained",
    category: "Backend",
    date: "2024-06-12",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: "8",
    title: "Getting Started with Tailwind",
    category: "CSS Framework",
    date: "2024-05-10",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];
</script>
