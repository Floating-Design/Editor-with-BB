<template>
  <div class="node">
    <textarea ref="textareaRef" v-model="conteudo"> </textarea>

    <Handle
      id="top"
      type="source"
      connectable="single"
      :position="Position.Top"
    />
    <Handle
      id="bottom"
      type="source"
      connectable="single"
      :position="Position.Bottom"
    />
    <Handle
      id="right"
      type="source"
      connectable="single"
      :position="Position.Right"
    />
    <Handle
      id="left"
      type="source"
      connectable="single"
      :position="Position.Left"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Handle, Position, NodeProps } from "@vue-flow/core";

interface NodeType extends NodeProps {
  name?: string;
}

const props = defineProps<NodeType>();
const conteudo = ref("");
const textareaRef = ref(null);
</script>

<style scoped>
.node {
  position: relative;
  background-color: blueviolet;
  border-radius: 4px;
  width: 150px;
  height: 50px;
  text-align: center;
  padding: 8px;
}

textarea {
  padding: 0;
  margin: 0;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: #ffffff;
}
</style>
