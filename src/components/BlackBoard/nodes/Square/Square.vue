<template>
  <div class="node">
    <textarea ref="textareaRef" v-model="conteudo" @input="ajustar"> </textarea>

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
import { ref, onMounted, watch } from "vue";
import { Handle, Position, NodeProps } from "@vue-flow/core";

const props = defineProps<NodeType>();
const conteudo = ref("");
const textareaRef = ref(null);

const isSelected = ref(props.selected);

watch(isSelected, () => {
  console.log("olha => ", isSelected);
});

interface NodeType extends NodeProps {
  name?: string;
}

function ajustar() {
  const textarea = textareaRef.value;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

onMounted(() => {
  ajustar();
});
</script>

<style scoped>
.teste {
  display: none;
  border: 10px solid red;
}
.node {
  position: relative;
  background-color: blueviolet;
  border-radius: 4px;
  width: 100px;
  min-height: 100px;
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
  min-height: 80px;
  color: #ffffff;
}
</style>
