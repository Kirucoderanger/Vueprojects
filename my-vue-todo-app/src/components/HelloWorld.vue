<script setup>
import { ref } from 'vue';
import StarRating from "../components/StarRating.vue";
const rating = ref(0);
const newTask = ref('');
const tasks = ref([]);
const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false });
    newTask.value = '';
  }
};

const toggleTask = (index) => {
  tasks.value[index].done = !tasks.value[index].done;
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};

</script>

<template>
 
  <div>
    <div class="container">
      <h1>Vue 3 To-Do List</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <button @click="addTask">Add</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span :class="{ completed: task.done }" @click="toggleTask(index)">{{ task.text }}</span>
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div>
      <h2>Rate this:</h2>
      <StarRating v-model="rating" />
      <p>Your rating: {{ rating }}</p>
    </div>
  </div>
  
</template>


<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
.completed {
  text-decoration: line-through;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
</style>




