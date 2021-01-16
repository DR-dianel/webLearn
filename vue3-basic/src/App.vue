<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <button @click="increase">👍+1</button><br />
  </div>
</template>

<script lang="ts">
import { METHODS } from 'http';
export default {
  name: 'App',
  data(){
    return {
      count:0
    };
  },

  methods:{
    increase(){
      this.count++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 5rem;
}
button {
  font-size: 3rem;
}
</style>
