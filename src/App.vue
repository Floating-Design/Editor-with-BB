<template>
  <!-- <Contributions :get-data="data.value" /> -->
  <Editor />
  <!-- 
  <div class="teste">
    <BlackBoard />
  </div> -->
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import Editor from "./components/Editor";
import BlackBoard from "./components/BlackBoard";
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
