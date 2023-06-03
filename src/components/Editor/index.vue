<template>
  <div ref="editor" id="editor"></div>
  <button @click="teste">save</button>
</template>

<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import SimpleImage from "./Plugin/plugin.js";
// import Image from "@editorjs/image";
// import SimpleImage from "simple-image-editorjs";

const initialData = {
  time: 1685805433198,
  blocks: [
    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓",
      },
    },
    {
      id: "SFBHA-ptgG",
      type: "board",
      data: {
        nodes: [
          {
            type: "square",
            data: {},
            events: {},
            id: "1",
            label: "Node: 1",
            position: { x: 348.5218468563215, y: 135.79978101550495 },
          },
          {
            type: "square",
            data: {},
            events: {},
            id: "2",
            label: "Node: 2",
            position: { x: 76.4769415857815, y: 51.126794861631026 },
          },
        ],
        edges: [],
        position: [0, 0],
        zoom: 1,
      },
    },
  ],
  version: "2.26.5",
};

const editor = new EditorJS({
  holder: "editor",
  placeholder: "Enter your text here...",
  // autofocus: true,
  inlineToolbar: true,
  tools: {
    // aqui você pode definir as suas ferramentas personalizadas do editor.js
    board: {
      class: SimpleImage,
    },
  },
  data: initialData,
});

function teste() {
  editor
    .save()
    .then((outputData) => {
      console.log(outputData);

      alert(JSON.stringify(outputData));
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
}
</script>
