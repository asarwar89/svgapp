<template>
  <div>
    <Instruction/>

    <Canvas :items="items" />

    <Textarea 
      id="shapeInput"
      placeholder="Please enter each shape in a new line."/>

    <Errors :errors="errors"/>

    <button v-on:click="processInput()">Draw SVG</button>

  </div>
</template>

<script>
import Instruction from './Instruction';
import Errors from './Errors';
import Textarea from './elements/Textarea';
import Canvas from './Canvas';

import processInput from '../jsFunctions/processInput';

export default {
  name: 'DrawSVG',
  data: function() {
    return {
        items: [
        ],
        errors: []
    }
  },
  components: {
    Instruction,
    Textarea,
    Errors,
    Canvas
  },
  methods: {
    processInput(){
      const input = document.getElementById('shapeInput').value;
      const inputArray = input.split(/\r?\n|\r/);

      let { errors, shapes } = processInput(inputArray);

      this.items = shapes;
      this.errors = errors.str;

    },
    cleanString(theString){
      return theString.trim().toLowerCase().replace(/\s\s+/g, ' ')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
svg {
  border: 10px solid #0059ab;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
}
button {
  background: #0059ab;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
  width: 200px;
}
button:hover {
  background: #1A73C5;
}
</style>
