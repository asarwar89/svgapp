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
import Instruction from './Instruction'
import Errors from './Errors'
import Textarea from './elements/Textarea'
import Canvas from './Canvas'

export default {
  name: 'HelloWorld',
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
      let error = {
        count: 0,
        str: []
      };
      let shapes = [];
      let eleArr = [];
      inputArray.forEach((element, index) => {
        const cEle = this.cleanString(element);
        switch (cEle.charAt(0)){
          case 'r':
            if ((/^r(\s\d+){4}$/g).test(cEle)){
              eleArr = cEle.split(/\s/);
              shapes.push(['rectA', 
                { 
                  x: eleArr[1], 
                  y: eleArr[2], 
                  height: eleArr[3], 
                  width: eleArr[4] 
                }
              ]);
            } else {
              error.str.push(`Line ${index + 1}: invalid input. Rectangles must have 4 values x, y, width, height. Like, r 10 10 20 30. Entered value "${element}".`);
              error.count++;
            }
            break;
          case 'c':
            if ((/^c(\s\d+){3}$/g).test(cEle)){
              eleArr = cEle.split(/\s/);
              shapes.push(['circL', 
                { 
                  x: eleArr[1], 
                  y: eleArr[2], 
                  r: eleArr[3] 
                }
              ]);
            } else {
              error.str.push(`Line ${index + 1}: invalid input. Circles must have 3 values x, y and radius. Like, c 30 40 20. Entered value "${element}".`);
              error.count++;
            }
            break;
          case 'p':
            if ((/^p(\s\d+,\d+){3,}$/g).test(cEle)){
              shapes.push(['polyG', 
                { 
                  points: cEle.replace('p ', '')
                }
              ]);
              break;
            } else {
              error.str.push(`Line ${index + 1}: invalid input. Polygons should have minimum 3 (x,y) coordinates. Like, p 10,10 20,30 40,50. Entered value "${element}".`);
              error.count++;
            }
            break;
          case 'e':
            if ((/^e(\s\d+){4}$/g).test(cEle)){
              eleArr = cEle.split(/\s/);
              shapes.push(['elipSE', 
                { 
                  x: eleArr[1], 
                  y: eleArr[2], 
                  rx: eleArr[3], 
                  ry: eleArr[4] 
                }
              ]);
            } else {
              error.str.push(`Line ${index + 1}: invalid input. Ellipse must have 4 values x, y, x radius, y radius. Like, e 120 200 60 30. Entered value "${element}".`);
              error.count++;
            }
            break;
          default:
        }
      });

      if (error.count === 0) {
        this.items = shapes;
        this.errors = [];
      } else {
        this.items = [];
        this.errors = error.str;
      }

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
