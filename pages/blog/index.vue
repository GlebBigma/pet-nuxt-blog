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
    id: 1,
    title: "His mother had always taught him",
    category: "history",
    createdAt: 1734696679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=His%20mother%20had%20always%20taught%20him"
  },
  {
    id: 2,
    title: "He was an expert but not in a discipline",
    category: "french",
    createdAt: 1734437479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=He%20was%20an%20expert%20but%20not%20in%20a%20discipline"
  },
  {
    id: 3,
    title: "Dave watched as the forest burned up on the hill.",
    category: "magical",
    createdAt: 1734178279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=Dave%20watched%20as%20the%20forest%20burned%20up%20on%20the%20hill."
  },
  {
    id: 4,
    title: "All he wanted was a candy bar.",
    category: "mystery",
    createdAt: 1733919079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=All%20he%20wanted%20was%20a%20candy%20bar."
  },
  {
    id: 5,
    title: "Hopes and dreams were dashed that day.",
    category: "crime",
    createdAt: 1733659879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hopes%20and%20dreams%20were%20dashed%20that%20day."
  },
  {
    id: 6,
    title: "Dave wasn't exactly sure how he had ended up",
    category: "english",
    createdAt: 1733400679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=Dave%20wasn't%20exactly%20sure%20how%20he%20had%20ended%20up"
  },
  {
    id: 7,
    title: "This is important to remember.",
    category: "magical",
    createdAt: 1733141479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=This%20is%20important%20to%20remember."
  },
  {
    id: 8,
    title: "One can cook on and with an open fire.",
    category: "american",
    createdAt: 1732882279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=One%20can%20cook%20on%20and%20with%20an%20open%20fire."
  },
  {
    id: 9,
    title: "There are different types of secrets.",
    category: "american",
    createdAt: 1732623079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=There%20are%20different%20types%20of%20secrets."
  },
  {
    id: 10,
    title: "They rushed out the door.",
    category: "fiction",
    createdAt: 1732363879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=They%20rushed%20out%20the%20door."
  },
  {
    id: 11,
    title: "It wasn't quite yet time to panic.",
    category: "mystery",
    createdAt: 1732104679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=It%20wasn't%20quite%20yet%20time%20to%20panic."
  },
  {
    id: 12,
    title: "She was aware that things could go wrong.",
    category: "love",
    createdAt: 1731845479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20was%20aware%20that%20things%20could%20go%20wrong."
  },
  {
    id: 13,
    title: "She wanted rainbow hair.",
    category: "mystery",
    createdAt: 1731586279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20wanted%20rainbow%20hair."
  },
  {
    id: 14,
    title: "The paper was blank.",
    category: "mystery",
    createdAt: 1731327079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=The%20paper%20was%20blank."
  },
  {
    id: 15,
    title: "The trees, therefore, must be such old",
    category: "fiction",
    createdAt: 1731067879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=The%20trees%2C%20therefore%2C%20must%20be%20such%20old"
  },
  {
    id: 16,
    title: "There was only one way to do things in the Statton house.",
    category: "magical",
    createdAt: 1730808679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=There%20was%20only%20one%20way%20to%20do%20things%20in%20the%20Statton%20house."
  },
  {
    id: 17,
    title: "She was in a hurry.",
    category: "french",
    createdAt: 1730549479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20was%20in%20a%20hurry."
  },
  {
    id: 18,
    title: "She had a terrible habit o comparing her life to others",
    category: "history",
    createdAt: 1730290279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20had%20a%20terrible%20habit%20o%20comparing%20her%20life%20to%20others"
  },
  {
    id: 19,
    title: "The rain and wind abruptly stopped.",
    category: "fiction",
    createdAt: 1730031079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=The%20rain%20and%20wind%20abruptly%20stopped."
  },
  {
    id: 20,
    title: "He couldn't remember exactly where he had read it",
    category: "french",
    createdAt: 1729771879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=He%20couldn't%20remember%20exactly%20where%20he%20had%20read%20it"
  },
  {
    id: 21,
    title: "He wandered down the stairs and into the basement",
    category: "french",
    createdAt: 1729512679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=He%20wandered%20down%20the%20stairs%20and%20into%20the%20basement"
  },
  {
    id: 22,
    title: "She has seen this scene before.",
    category: "classic",
    createdAt: 1729253479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20has%20seen%20this%20scene%20before."
  },
  {
    id: 23,
    title: "It's an unfortunate reality that we don't teach people how to make money",
    category: "crime",
    createdAt: 1728994279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=It's%20an%20unfortunate%20reality%20that%20we%20don't%20teach%20people%20how%20to%20make%20money"
  },
  {
    id: 24,
    title: "The robot clicked disapprovingly.",
    category: "crime",
    createdAt: 1728735079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=The%20robot%20clicked%20disapprovingly."
  },
  {
    id: 25,
    title: "It went through such rapid contortions",
    category: "fiction",
    createdAt: 1728475879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=It%20went%20through%20such%20rapid%20contortions"
  },
  {
    id: 26,
    title: "She patiently waited for his number to be called.",
    category: "french",
    createdAt: 1728216679386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=She%20patiently%20waited%20for%20his%20number%20to%20be%20called."
  },
  {
    id: 27,
    title: "Ten more steps.",
    category: "mystery",
    createdAt: 1727957479386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=Ten%20more%20steps."
  },
  {
    id: 28,
    title: "He had three simple rules by which he lived.",
    category: "crime",
    createdAt: 1727698279386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=He%20had%20three%20simple%20rules%20by%20which%20he%20lived."
  },
  {
    id: 29,
    title: "The chair sat in the corner where it had been",
    category: "mystery",
    createdAt: 1727439079386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=The%20chair%20sat%20in%20the%20corner%20where%20it%20had%20been"
  },
  {
    id: 30,
    title: "Things aren't going well at all",
    category: "american",
    createdAt: 1727179879386,
    imgSrc: "https://dummyjson.com/image/400x200/008080/ffffff?text=Things%20aren't%20going%20well%20at%20all"
  }
];
</script>
