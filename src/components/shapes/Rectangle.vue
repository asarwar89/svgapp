<template>
  <rect 
    :x="positions.x" 
    :y="positions.y" 
    :width="positions.width" 
    :height="positions.height" 
    v-bind:style="{fill: color}" 
  />
</template>

<script>
export default {
  props: {
    positions: Object,
    color: String
  }
}
</script>