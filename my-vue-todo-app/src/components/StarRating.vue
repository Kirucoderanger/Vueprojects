<template>
    <div class="StarRating">
      <span
        v-for="star in maxStars"
        :key="star"
        :class="['star', { filled: star <= modelValue }]"
        @click="updateRating(star)"
      >
        ★
      </span>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
    modelValue: Number, // v-model support
    maxStars: { type: Number, default: 5 }
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const updateRating = (star) => {
    emit("update:modelValue", star);
  };
  </script>
  
  <style scoped>
  .star {
    font-size: 2rem;
    color: gray;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .star.filled {
    color: gold;
  }
  </style>
  