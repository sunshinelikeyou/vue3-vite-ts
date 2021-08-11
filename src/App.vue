<template>
    <div>
      <router-view ></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld, TodoList
  },
  setup() {
    return { theme: ref({}), msg: ref('hello kitty') };
  },
})
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}
</style>
