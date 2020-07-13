<template>
  <circle 
    :cx="positions.x" 
    :cy="positions.y" 
    :r="positions.r" 
    :fill="color" 
  />
</template>

<script>
export default {
  props: {
    positions: Object,
    color: String
  },
  methods: {
    getRandomRGB() {
      const randomNo = Math.floor(Math.random()*256);
      return 'RGB(' + randomNo + ', ' + randomNo + ', ' + randomNo + ')';
    }
  }
}
</script>