<template>
  <div class="max-w-7xl mx-auto p-6">
    <div v-if="error" class="text-red-600 text-center">
      <p>Error loading post: {{ error }}</p>
    </div>
    <div v-else-if="!post" class="text-center">
      <p>Loading post...</p>
    </div>
    <div v-else class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="h-64 bg-gray-200">
        <img :src="post.imgSrc" alt="Post Image" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">{{ post.title }}</h1>
          <p class="text-gray-600 mt-2">{{ formattedDate }}</p>
          <p class="text-gray-500 italic mt-1">Category: {{ post.category }}</p>
        </div>
        <div class="mt-6">
          <NuxtLink
              to="/blog"
              class="px-8 py-3 inline-block bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-200"
          >
            Back to Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useFetch } from '#app';
import { format } from 'date-fns';
import { Post } from '~/types/post';
import { Ref, computed } from 'vue';

const route = useRoute();
const postId = route.params.id;

const { data: post, error } = useFetch<Post>(`/api/posts/${postId}`);

const typedPost: Ref<Post | null> = post as Ref<Post | null>;

const formattedDate = computed(() => {
  return typedPost.value ? format(new Date(typedPost.value.createdAt), 'yyyy/MM/dd') : '';
});
</script>
