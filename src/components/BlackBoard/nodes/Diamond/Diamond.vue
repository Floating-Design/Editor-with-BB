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

function ajustar() {
  const textarea = textareaRef.value;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.style.width = textarea.style.height;

  // textarea.style.width = "auto";
}

onMounted(() => {
  ajustar();
});
</script>

<style scoped>
.node {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: blueviolet;
  border-radius: 4px;
  width: 100px;
  height: 100px;
  text-align: center;
  transform: rotate(45deg);
}

textarea {
  transform: rotate(-45deg);
  padding: 0;
  margin: 0;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  outline: none;
  min-width: 100%;
  height: 18px;
  color: #ffffff;
  text-align: center;
}

div[data-handleid="top"] {
  position: absolute;
  left: 0;
  top: -3px;
}
</style>
