<template>
  <div>
    <link rel="stylesheet" href="http://localhost:9527/element-plus.css">
    <p>name</p>
    <pre>data</pre>
    <el-button>this is a button</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'

import { eventCenter } from './eventCenter';

eventCenter.on('test', (a: string, b: string, c: string) => {
  console.log('test', a,b,c)
})
</script>
