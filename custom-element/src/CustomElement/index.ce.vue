<script setup lang='ts'>
import { ref } from 'vue';

import {
  ElButton,
  ElInput,
} from 'element-plus';

const isDark = ref(false)
const print = () => {
  console.log('print')
}
</script>

<template>
    <link rel="stylesheet" href="./index.css">
    <button @click="isDark = !isDark">
    <span v-if="isDark">🌙</span>
    <span v-else>🌞</span>
  </button>
  <el-input></el-input>
  <el-button type="primary" @click="print">主要按钮</el-button>
</template>

<style lang="scss">

:host {
  --color: #fbbf24;
  --bg-normal: #fAfAf9;
  --bg-active: #f5f5f4;
  --font-size: 24px;
}

button {
  background-color: var(--bg-normal);
  border: none;
  border-radius: .5rem;
  color: var(--color);
  cursor: pointer;
  display: flex;
  font-size: var(--font-size);
  overflow: hidden;
  padding: 0.4em;
  transition: background-color 0.3s ease, color 0.3s cubic-bezier(0.64, 0, 0.78, 0);
}

button:hover,
button:focus {
  background-color: var(--bg-active);
  outline: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from {
  transform: translateY(-150%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}

.slide-leave-to {
  transform: translateY(150%);
}
</style>

