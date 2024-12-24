<template>
  <header class="bg-gray-800 text-white py-4">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Hello, I'm Hlib Bihma</h1>
        <p class="text-lg mt-2">Frontend Developer</p>
      </div>
      <div>
        <NuxtLink to="/"
                  class="text-xl font-semibold hover:underline"
                  active-class="text-[#94a3b8] font-bold hover:no-underline"
        >
          Home
        </NuxtLink>
        <NuxtLink to="/blog"
                  class="ml-[20px] text-xl font-semibold hover:underline"
                  active-class="text-[#94a3b8] font-bold hover:no-underline"
        >
          Blog
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
