<template>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isOpen" class="popup-overlay" @click.self="closePopup">
          <div class="popup-content">
            <p>This is an animated popup!</p>
            <button @click="closePopup">Close</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({ isOpen: Boolean });
  const emit = defineEmits(['close']);
  
  const closePopup = () => emit('close');
  </script>
  
  <style scoped>
  /* Fade Animation 
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  /* Popup Styles */
  .popup-overlay {
    position: fixed;
    top: 0; left: 0; 
    width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex; align-items: center; justify-content:right;
  }
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  /* Slide Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

  </style>
  