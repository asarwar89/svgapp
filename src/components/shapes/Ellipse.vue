<template>
  <ellipse 
    :cx="positions.x" 
    :cy="positions.y" 
    :rx="positions.rx" 
    :ry="positions.ry" 
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