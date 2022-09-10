<template>
  <div id="app">
    <stopwatch :running="running" :resetWhenStart="true" />
    <button @click="startT">start</button> <button @click="stopT">stop</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Stopwatch from "./components/StopWatch";

export default {
  name: "App",
  components: {
    HelloWorld,
    Stopwatch
  },
  methods: {
    stopT: function() {
      this.running = false;
    },
    startT: function() {
      this.running = true;
    }
  },
  data() {
    return {
      running: true
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
