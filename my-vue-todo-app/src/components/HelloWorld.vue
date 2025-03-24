<script setup>
import { ref } from 'vue';
import StarRating from "../components/StarRating.vue";


const display = ref("");

const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

const pressButton = (btn) => {
  if (btn === "=") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  } else {
    display.value += btn;
  }
};

const clearDisplay = () => {
  display.value = "";
};


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
    <div class="calculator">
    <h2>Vue 3 Calculator</h2>
    <input type="text" v-model="display" readonly />

    <div class="buttons">
      <button v-for="btn in buttons" :key="btn" @click="pressButton(btn)">
        {{ btn }}
      </button>
    </div>

    <button class="clear" @click="clearDisplay">C</button>
  </div>
  </div>
  
</template>


<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.container input {
  width: 70%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 1px;
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


<style scoped>
.calculator {
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #f4f4f4;
}

.calculator input {
  width: 80%;
  height: 30px;
  font-size: 1.5rem;
  text-align: right;
  padding: 10px;
  margin-bottom: 10px;
  
  border-radius: 5px;
  border: 1px solid #ccc;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.buttons button {
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #eee;
}

button:hover {
  background-color: #ddd;
}

.clear {
  width: 100%;
  margin-top: 10px;
  background-color: red;
  color: white;
}
</style>




