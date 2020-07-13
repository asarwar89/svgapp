<template>
  <textarea 
    :id="id"
    :placeholder="placeholder">
  </textarea>
</template>

<script>
export default {
  props: {
    id: String,
    placeholder: String
  }
}
</script>

<style scoped>
  textarea {
    border: 1px solid #0059ab;
    border-radius: 5px;
    display: block;
    margin: 0 auto 30px;
    max-width: 300px;
    min-height: 100px;
    padding: 10px;
    width: 90%;
  }
</style>