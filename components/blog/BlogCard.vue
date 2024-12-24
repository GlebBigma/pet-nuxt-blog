<template>
  <div class="w-72 mx-auto border rounded-lg shadow-lg overflow-hidden bg-white">
    <div class="h-48 bg-gray-200">
      <img :src="imageSrc" alt="Blog Image" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800 truncate">{{ title }}</h2>
      <div class="flex justify-between items-center text-gray-600 text-sm mt-2">
        <span>{{ category }}</span>
        <span>{{ formattedDate }}</span>
      </div>
      <NuxtLink
          :to="`/blog/${id}`"
          class="mt-4 block text-center w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
      >
        View Post
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { format } from 'date-fns';

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  date: number;
  imageSrc: string;
}

const props = defineProps<BlogCardProps>();

const formattedDate = computed(() => {
  return format(new Date(props.date), 'yy/MM/dd');
});
</script>
