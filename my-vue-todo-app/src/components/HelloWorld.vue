<script setup>
import { ref } from 'vue';
import StarRating from "../components/StarRating.vue";

import { defineProps, defineEmits } from 'vue';
import { onMounted } from 'vue';
import Popup from '../components/Popup.vue';

const showPopup = ref(false);

onMounted(() => {
  setTimeout(() => {
    showPopup.value = true; // Show popup after 2 seconds
  }, 2000);
});

const props = defineProps({ isOpen: Boolean });
const emit = defineEmits(['close']);

const closePopup = () => emit('close');


// Reactive state to track whether the sign-up panel is active
const isSignUp = ref(false);

// Function to toggle between Sign Up and Sign In
const togglePanel = (signUp) => {
  isSignUp.value = signUp;
};


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
  <div>
    <h2>Animated-Double-Slider-login-Signup-Form</h2>
  </div>

  <div :class="{ 'right-panel-active': isSignUp }" class="container">
    <!-- Sign Up Form -->
    <div class="form-container sign-up-container">
      <form @submit.prevent>
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>

    <!-- Sign In Form -->
    <div class="form-container sign-in-container">
      <form @submit.prevent>
        <h1>Sign in</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>

    <!-- Overlay Container -->
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us, please log in with your personal info</p>
          <button class="ghost" @click="togglePanel(false)">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
          <button class="ghost" @click="togglePanel(true)">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Teleport to="body">
      <Transition name="fade">
      <div v-if="isOpen" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
          <p>This is an animated popup!</p>
          <button @click="closePopup">Close</button>
        </div>
      </div>
    </Transition>
    <div>
      <button @click="showPopup = true">Open Popup</button>
      <Popup :isOpen="showPopup" @close="showPopup = false" />
    </div>
  </Teleport>

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
  background-color: #403a3a;
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

<style scoped>
* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
  font-size: xx-large;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

</style>




