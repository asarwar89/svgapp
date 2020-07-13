<template>
  <polygon :points="positions.points" v-bind:style="{fill: color}" />
</template>

<script>
export default {
  props: {
    positions: Object,
    color: String
  }
}
</script>