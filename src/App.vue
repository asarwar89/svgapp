<template>
  <div id="app">
    <SvgGen/>
  </div>
</template>

<script>
import SvgGen from './components/SvgGen.vue'

export default {
  name: 'App',
  components: {
    SvgGen
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  margin: 30px auto;
  text-align: center;
}
</style>
