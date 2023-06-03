<!-- :nodes="INITIAL_NODES" -->
<template>
  <VueFlow
    :default-edge-options="{ type: 'smoothstep' }"
    :node-types="NODE_TYPES"
  >
    <Background :gap="12" :size="2" :variant="BackgroundVariant.Lines" />
    <Panel
      :position="PanelPosition.TopRight"
      style="display: flex; flex-direction: column"
    >
      <button type="button" @click="addNode('square')">add Square</button>
      <button type="button" @click="addNode('rectangle')">add Rectangle</button>
      <button type="button" @click="addNode('circle')">add Circle</button>
      <button type="button" @click="addNode('diamond')">add Diamond</button>
    </Panel>
    <Controls />
  </VueFlow>
</template>

<script setup lang="ts">
import { markRaw, ref, watch } from "vue";
import {
  VueFlow,
  Panel,
  useVueFlow,
  PanelPosition,
  Node,
} from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { Square, Diamond, Circle, Rectangle } from "./nodes";

const NODE_TYPES = {
  square: markRaw(Square),
  diamond: markRaw(Diamond),
  circle: markRaw(Circle),
  rectangle: markRaw(Rectangle),
};

const {
  nodes,
  addNodes,
  setNodes,
  addEdges,
  setEdges,
  onConnect,
  dimensions,
  toObject,
  setTransform,
} = useVueFlow();

onConnect((params) => addEdges([params]));

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 50,
      y: 50,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "diamond",
    position: {
      x: 50,
      y: 200,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "circle",
    position: {
      x: 50,
      y: 350,
    },
    events: {
      mouseEnter(event) {
        console.log("mouse entrou", { event });
      },
      mouseLeave(event) {
        console.log("mouse saiu", { event });
      },
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "rectangle",
    position: {
      x: 50,
      y: 500,
    },
    data: {},
  },
] satisfies Node[];

function addNode(type) {
  const nodeId = (nodes.value.length + 1).toString();

  const newNode: Node = {
    id: nodeId,
    label: `Node: ${nodeId}`,
    type: `${type}`,
    position: {
      x: Math.random() * dimensions.value.width,
      y: Math.random() * dimensions.value.height,
    },
    data: {},
  };

  addNodes([newNode]);
}

function getData() {
  return toObject();
}

const flowProps = ref({});

defineExpose({
  getData,
  flowProps,
});

watch(flowProps, () => {
  const flow = flowProps.value;
  if (flow) {
    const [x = 0, y = 0] = flow.position;
    setNodes(flow.nodes);
    setEdges(flow.edges);
    setTransform({ x, y, zoom: flow.zoom || 0 });
  }
});
</script>

<style scoped>
div[selected="true"] {
  border: 1px solid red;
}

.limite {
  width: 100%;
  height: 300px;
}
</style>
