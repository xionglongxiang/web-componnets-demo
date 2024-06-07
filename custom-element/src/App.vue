<template>
  <div>
    <custom-plugin
      ref="myPlugin"
      id="myPlugin"
      name="Hello from HTML"
      data='{"name": "John", "age": 30}'
    ></custom-plugin>
    <el-button @click="sendDataToPlugin">Update Data</el-button>
  </div>
</template>

<script setup lang="ts">

declare global {
  interface Window {
    Plugins: {
      CustomPlugin: {
        eventCenter: {
          emit: (eventName: string, ...args: any[]) => void;
        };
      };
    };
  }
}

let sendDataToPlugin = () => {
  window.Plugins.CustomPlugin.eventCenter.emit('test', 1,2,3)
}


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
