<template>
    <div class="stars">
      <span 
        v-for="star in 5" 
        :key="star" 
        @click="setRating(star)"
        @mouseover="hoverRating = star"
        @mouseleave="hoverRating = modelValue"
      >
        {{ star <= (hoverRating || modelValue) ? "★" : "☆" }}
      </span>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: {
      modelValue: Number,
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const hoverRating = ref(null);
  
      const setRating = (rating) => {
        emit("update:modelValue", rating);
      };
  
      return { hoverRating, setRating };
    },
  };
  </script>
  
  <style scoped>
  .stars {
    cursor: pointer;
    font-size: 24px;
    color: gold;
  }
  </style>