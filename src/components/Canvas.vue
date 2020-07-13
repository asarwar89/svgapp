<template>
  <svg width="250" height="250">
    <component v-for="(item,index) in items" 
      :is="item[0]"
      :key="index"
      :positions="item[1]"
      :color="getRandomRGB()"
    />
    Sorry, your browser does not support inline SVG.  
  </svg>
</template>

<script>

import Rectangle from './shapes/Rectangle'
import Circle from './shapes/Circle'
import Polygon from './shapes/Polygon'
import Ellipse from './shapes/Ellipse'

export default {
  props: {
    items: Array
  },
  components: {
    rectA: Rectangle,
    circL: Circle,
    polyG: Polygon,
    elipSE: Ellipse
  },
  methods: {
    getRandomRGB() {
      const randomRed = Math.floor(Math.random()*256);
      const randomGreen = Math.floor(Math.random()*256);
      const randomBlue = Math.floor(Math.random()*256);
      return 'RGB(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ')';
    }
  }
}
</script>
<style scoped>
  svg {
    border: 10px solid #0059ab;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }
</style>